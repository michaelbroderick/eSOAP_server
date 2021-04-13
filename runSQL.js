var mysql = require('mysql');
var fs = require('fs');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'esoap_local',
    multipleStatements: true

})

// fs.readFile('./sqlScripts/DB_changes.sql', 'utf8', function (err, data) {
//     if (err) throw err;
//     connection.query(data, function (err, results) {
//         if (err) throw err;

//     });
// });


function openFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) return reject(err);
            return resolve(data);
        })
    })
}

function injectScript(connection, script) {
    return new Promise((resolve, reject) => {
        connection.query(script, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

function checkDB(connection) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT lengthoftotalstay FROM surgery', (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
}

async function runSQL(connection) {
    let data = await openFile('./sqlScripts/DB_changes.sql');
    try {
        let check = await checkDB(connection);
        console.log('Variable found, no need to update')
    }
    catch {
        console.log('Variable missing, update database')
        await injectScript(connection, data)
    }
    let kois = await openFile('./sqlScripts/createKOIs.sql');
    await injectScript(connection, kois)
}

runSQL(connection)



