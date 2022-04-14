const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// app.use(express.static(path.join(__dirname, 'client', 'public')));
app.get('/', (req, res) => {
    res.send('hello from ec2 server');
})
app.listen(PORT, () => {
    console.log('Listening on ' + PORT);
})