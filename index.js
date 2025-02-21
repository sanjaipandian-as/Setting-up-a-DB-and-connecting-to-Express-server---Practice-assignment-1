require ('dotenv').config()
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 3010;

app.use(express.static('static'));


const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL); // 
        console.log('Connected to database');
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        process.exit(1);
    }
};

connectDB();

app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
