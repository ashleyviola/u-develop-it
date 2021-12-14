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

// default response for any other request (not found)
app.use((req,res) => {
    res.status(404).end();
});

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

// starts express.js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});