// imports express 
const express = require('express');

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

// starts express.js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});