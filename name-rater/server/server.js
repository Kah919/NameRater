const Data = require('./data.js');
const express = require('express');
const app = express();
require("dotenv").config()
const mongoose = require('mongoose');
console.log(process.env.DB_USERNAME)
mongoose.connect(`mongodb+srv${process.env.DB_USERNAME}:${process.env.DB_PW}//:@cluster0-ktml6.mongodb.net/test?retryWrites=true&w=majority`);
const Male = require('./models/male');
const Female = require('./models/female');
console.log(Data)

app.get('/api/names', (req, res) => {
    res.json(Data);
    db.User.findAll({})
    .then( (allUsers) => {
        res.json(allUsers)
    })
});

app.get('/api/names/male', (req, res) => {
    res.json(Data.male);
});

app.get('/api/names/female', (req, res) => {
    res.json(Data.female);
});

app.get('/api/names/female/:id', (req, res) => {
    const person = Data.female[parseInt(req.params.id)];
    if(!person) res.status(404).send('Name not found');
    res.send(person);
});

const port = 5000;

app.listen(port, () => console.log(`server started on ${port}`));