const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: 'esoap_local',
    timezone: 'gmt'
})

const ghost = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: 'ghostDB',
    timezone: 'gmt'
})

const registry = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: 'esoap_global',
    timezone: 'gmt'
})

const getData = (db, table) => {
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM ??';

        db.query(q, [table], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
}

async function local2ghost(table) {
    let data = await getData(connection, table);
    for (let dt of data) {
        // delete dt.dischargedate;
        await insertData(ghost, dt, table);
    }
}

async function ghost2local(table) {
    let data = await getData(ghost, table);
    console.log(data[0])
    for (let dt of data) {
        if (table === 'demographics') {
            dt.pcn = dt.mrn
            delete dt.mrn;
        }

        if (table === 'sbo') {
            dt.sbo_complicationsid = dt.complicationsid
            delete dt.complicationsid
            dt.sbo_destinationid = dt.destinationid
            delete dt.destinationid
            delete dt.percentComplete

        }

        if (table === 'rif') {
            delete dt.percentComplete
        }
        if (table === 'lap') {
            delete dt.percentComplete
        }
        if (table === 'ruq') {
            delete dt.percentComplete
        }

        await insertData(connection, dt, table);
    }
}

async function fullGhost2Local() {
    await ghost2local('demographics')
    await ghost2local('labs')
    await ghost2local('imaging')
    await ghost2local('surgery')
    await ghost2local('rif')
    await ghost2local('sbo')
    await ghost2local('ruq')
    await ghost2local('lap')
}

// fullGhost2Local();

const insertData = (db, data, table) => {
    return new Promise((resolve, reject) => {
        const q = 'INSERT INTO ?? SET ?';
        db.query(q, [table, data], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
};

const getPatientData = (db, table, id) => {
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM ?? WHERE patientid = ?';
        db.query(q, [table, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
}


async function local2registry(connection, registry, table, patientid, fieldList, registryId) {
    let result = await getPatientData(connection, table, patientid);
    data = result[0];
    if (table !== 'demographics') { data.registryId = registryId }
    for (let item of fieldList) { delete data[item] };
    return await insertData(registry, data, table);
}

async function submitPatientToRegistry(connection, registry, patientid, module) {

    const result = await local2registry(connection, registry, 'demographics', patientid, ['pcn', 'lastviewed'])

    await local2registry(connection, registry, 'labs', patientid, ['labid', 'patientid'], result.insertId)
    await local2registry(connection, registry, 'imaging', patientid, ['imagingid', 'patientid'], result.insertId)
    await local2registry(connection, registry, 'surgery', patientid, ['surgeryid', 'patientid'], result.insertId)
    if (module) {
        const resultMod = await local2registry(connection, registry, module, patientid, ['id', 'patientid'], result.insertId);
    };

}

//submitPatientToRegistry(connection, registry, '1', 'rif');

module.exports = { getPatientData, local2registry, submitPatientToRegistry }



