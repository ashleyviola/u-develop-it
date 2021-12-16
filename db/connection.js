//imports mysql2
const mysql = require('mysql2');

// connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MySQL username,
        user: 'root',
        //Your MySQL password 
        password: 'Ishley14',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;