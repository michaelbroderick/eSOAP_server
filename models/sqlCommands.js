module.exports.findByPCN = (connection, pcn) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM demographics WHERE pcn=?', [pcn], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

module.exports.selectById = (connection, table, id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ?? WHERE patientid=?', [table, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};


module.exports.selectByAny = (connection, table, col_name, id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ?? WHERE ??=?', [table, col_name, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};


module.exports.generalQuery = (connection, query, vars) => {
    return new Promise((resolve, reject) => {
        connection.query(query, vars, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};


module.exports.insertIntoDemographics = (connection, pcn, userid) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO demographics(pcn, userid) VALUES (?, ?)', [pcn, userid], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });


    });

};


module.exports.init_table = (connection, table, patientid) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO ??(patientid) VALUES (?)', [table, patientid], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};


module.exports.insert_data = (connection, table, data) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO ?? SET ?', [table, data], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

module.exports.updateModules = (connection, module, data, id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE ?? SET ? WHERE patientid=?', [module, data, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
};


module.exports.updateAny = (connection, module, data, col_name, id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE ?? SET ? WHERE ??=?', [module, data, col_name, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
};



module.exports.getjoinedData = (connection, id) => {
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

module.exports.getAllData = (connection) => {
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



module.exports.registerUser = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO accounts SET ?', [data], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

module.exports.checkUser = (connection, username) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM accounts WHERE username=?', [username], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};


module.exports.checkEmail = (connection, table, email) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ?? WHERE email=?', [table, email], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};


module.exports.updateUserTable = (connection, table, data, id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE ?? SET ? WHERE id=?', [table, data, id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
};

module.exports.logHistory = (connection, userid, patientid) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO viewhistory(userid,patientid) VALUES(?,?)', [userid, patientid], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};


module.exports.getHistory = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT max(lastviewed) AS lastviewed, pcn, viewhistory.patientid, admissiondate, percentcomplete \
         FROM viewhistory \
          LEFT JOIN demographics ON viewhistory.patientid = demographics.patientid WHERE viewhistory.userid = ? GROUP BY viewhistory.patientid ORDER BY lastviewed DESC LIMIT 5', [id], (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })

};

module.exports.getKOIs = (connection, moduleid) => {
    return new Promise((resolve, reject) => {
        let q = 'SELECT koi,koitarget FROM kois WHERE module=?';
        connection.query(q, [moduleid], (error, elements) => {

            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
};


module.exports.getCriteria = (connection, moduleid, groupnum) => {
    return new Promise((resolve, reject) => {
        let q = 'SELECT * FROM criteria WHERE module=? AND groupnum=?';
        connection.query(q, [moduleid, groupnum], (error, elements) => {

            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });

    })
};

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

// module.exports = { findByPCN, getAllData, checkUser, registerUser, insertIntoDemographics, init_table, getjoinedData, selectById, insertIntoModules, updateModules, getData, getModule, getModulePercentage };

