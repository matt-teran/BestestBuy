const express = require('express');
const path = require('path');
const axios = require('axios');
const expressStaticGzip = require('express-static-gzip');
const compression = require('compression');

const { API_KEY } = require('./config');

const app = express();

app.use(compression());
app.use('/', expressStaticGzip('BestestBuy', { ensureGzipedFiles: true }));
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use(express.json());

// receive all requests
app.use('*', (req, res) => {
  const { method } = req;
  const url = `${'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc'}${req.originalUrl}`;
  const headers = { Authorization: API_KEY };
  const { body } = req;
  // forward request w/ config to API
  axios({
    method, url, headers, data: body,
  })
  // send received data to client
    .then(({ data }) => { res.send(data); })
    .catch((err) => { res.send(err); });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

// "react-image-magnifiers": "^1.4.0",
