// imports express 
const express = require('express');
const database = require('mime-db');

//imports mysql2
const mysql = require('mysql2');

//port designation and app expression
const PORT = process.env.PORR || 3001;
const app = express();

//Express.js middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

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
// gets information from candiate table rows
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// read operation 
db.query(`SELECT * FROM candidates WHERE id = 1`, (err,row) => {
    if(err){
        console.log(err);
    }
    console.log(row);
});

// delete operation 
//? denotes a placeholder 
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });

// create candidate 
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                VALUES(?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
db.query(sql, params, (err,result) => {
    if(err){
        console.log(err);
    }
    console.log(result);
});
// default response for any other request (not found)
app.use((req,res) => {
    res.status(404).end();
});



// starts express.js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});