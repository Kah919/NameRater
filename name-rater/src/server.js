const Data = require('./data.js')

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/names', (req, res) => {
    res.json(Data);
});

app.get('/api/names/male', (req, res) => {
    res.json(Data.male);
});

app.get('/api/names/female', (req, res) => {
    res.json(Data.female);
})

const port = 5000;

app.listen(port, () => console.log(`server started on ${port}`));