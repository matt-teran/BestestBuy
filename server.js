const express = require('express');
const path = require('path');
const axios = require('axios');

const { API_KEY } = require('./config.js');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'public')));
app.use(express.json());

//receive all requests
app.use('*', (req, res) => {
    const method = req.method;
    const url = `${`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc`}${req.originalUrl}`;
    const headers = { Authorization: API_KEY }; 
    const data = req.body;
    //forward request w/ config to API
    axios({ method, url, headers, data })
        //send received data to client
        .then(({ data }) => { res.send(data); })
        .catch((err) => { res.send(err) });
})

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
