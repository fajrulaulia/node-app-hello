'use strict';

const express = require('express');


let svc = process.env.SVC_NAME
if (!process.env.SVC_NAME) {
    svc = "SVC_NAME unset, set to default"
}

// Constants
const APP_PORT = process.env.APP_PORT || 8081;
const APP_HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    let output = "Hello World,<br/>"
    output += " service name:  <strong>" + svc +"</strong>"
    if (req.query.message) {
        output += ",<br/> Message by request: <strong>" + req.query.message+"</strong>"
    }
    res.send(output);
});

app.listen(APP_PORT, APP_HOST);
console.log(`Running on http://${APP_HOST}:${APP_PORT}`);
