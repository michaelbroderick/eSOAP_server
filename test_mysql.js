var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodelogin'
});

// connection.connect();

connection.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});

connection.query('SELECT * FROM accounts WHERE id=1', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// const fn = async () => {
//   const users = await connection.query('SELECT * FROM accounts WHERE id=1');
//   console.log('Await solution', users)
//   //console.log('Await solution 2', fields)

// }

// fn();

SelectAllElements = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM accounts', (error, elements) => {
      if (error) {
        return reject(error);
      }
      return resolve(elements);
    });
  });
};

async function sequential() {

  try {

    const result1 = await SelectAllElements();
    const result2 = await SelectAllElements();
    const result3 = await SelectAllElements();

    console.log('Await', result1)
    console.log('Await', result2)
    console.log('Await', result3)

  }
  catch (error) {
    console.log(error)
  }

}

sequential();

// connection.query('SELECT * FROM accounts', function (results, error, fields) {
//   if (error) throw error;
//   //console.log(results[0]);
//   console.log('hello')

// })

// const data = { username: 'rparker', password: 'RORO!', email: 'brodermi@tcd.ie' };

// connection.query('INSERT INTO ?? SET ?', ['accounts', data], function (error, results, fields) {
//   if (error) throw error;
// });


// let query = connection.query('UPDATE ?? SET ? WHERE id=7', ['accounts', data], function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0]);
// });



// connection.end();

