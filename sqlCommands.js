findByPCN = (connection, pcn) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM demographics WHERE pcn=?', [pcn], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

selectById = (connection, table, id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ?? WHERE patientid=?', [table, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};


insertIntoDemographics = (connection, pcn, userid) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO demographics(pcn, userid) VALUES (?, ?)', [pcn, userid], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });


    });

};

insertIntoModules = (connection, table, id) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO ??(patientid) VALUES (?)', [table, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });


    });

};

init_table = (connection, table, patientid) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO ??(patientid) VALUES (?)', [table, patientid], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

updateModules = (connection, module, data, id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE ?? SET ? WHERE patientid=?', [module, data, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
};



getjoinedData = (connection, id) => {
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM demographics\
        LEFT JOIN labs ON demographics.patientid = labs.patientid \
    LEFT JOIN imaging ON demographics.patientid = imaging.patientid \
    LEFT JOIN surgery ON demographics.patientid= surgery.patientid\
    LEFT JOIN rif ON demographics.patientid= rif.patientid\
    LEFT JOIN sbo ON demographics.patientid= sbo.patientid\
    LEFT JOIN ruq ON demographics.patientid= ruq.patientid\
    LEFT JOIN lap ON demographics.patientid= lap.patientid\
    WHERE demographics.patientid = ?';

        connection.query(q, [id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

getAllData = (connection) => {
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM demographics LEFT JOIN \
    labs ON demographics.registryid = labs.registryid \
    LEFT JOIN imaging ON demographics.registryid = imaging.registryid \
    LEFT JOIN surgery ON demographics.registryid= surgery.registryid\
    LEFT JOIN rif ON demographics.registryid= rif.registryid\
    LEFT JOIN sbo ON demographics.registryid= sbo.registryid\
    LEFT JOIN ruq ON demographics.registryid= ruq.registryid\
    LEFT JOIN lap ON demographics.registryid= lap.registryid';

        connection.query(q, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

getData = (connection, module, id) => {
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM ?? WHERE patientid = ?';

        connection.query(q, [module, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

getModule = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT moduleid, percentComplete, patientid FROM demographics WHERE patientid=?', [id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

getModulePercentage = (connection, table, id) => {
    return new Promise((resolve, reject) => {

        connection.query('SELECT percentComplete FROM ?? WHERE patientid=?', [table, id], (error, elements) => {
            if (error) {

                return reject(error);
            }
            return resolve(elements);
        });

    })

};

registerUser = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO accounts SET ?', [data], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

checkUser = (connection, username) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM accounts WHERE username=?', [username], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

// getData = (connection,) => {
//     return new Promise((resolve, reject) => {
//         connection.query('', [], (error, elements) => {
//             if (error) {
//                 return reject(error);
//             }
//             return resolve(elements);
//         });

//     })

// };


// = (connection, ) => {
// return new Promise((resolve,reject)=>{
// connection.query('', [], (error, elements) => {
//     if (error) {
//         return reject(error);
//     }
//     return resolve(elements);
// });

// })

// };
// = (connection, ) => {
// return new Promise((resolve,reject)=>{
// connection.query('', [], (error, elements) => {
//     if (error) {
//         return reject(error);
//     }
//     return resolve(elements);
// });

// })

// };

module.exports = { findByPCN, getAllData, checkUser, registerUser, insertIntoDemographics, init_table, getjoinedData, selectById, insertIntoModules, updateModules, getData, getModule, getModulePercentage };

