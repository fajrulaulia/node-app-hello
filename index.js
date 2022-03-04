'use strict';

const express = require('express');

if (!process.env.APP_PORT){
    throw new Error("APP_PORT not set, please set APP_PORT")
}

// Constants
const APP_PORT =  process.env.APP_PORT;
const APP_HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    let output = "Hello World"
    if (process.env.APP_AUTHOR){
        output += " Author set by ENV: " + process.env.APP_AUTHOR
    }
    if (req.query.message){
        output += " Message by request: "+req.query.message 
    }
    res.send(output);
});

app.listen(APP_PORT, APP_HOST);
console.log(`Running on http://${APP_HOST}:${APP_PORT}`);
