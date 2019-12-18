const Data = require('./data.js');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Male = require('./models/Male');
const Female = require('./models/Female');
require("dotenv").config();
const name = require('./routes/api/names');
const bodyParser = require('body-parser'); // allow us to take request and get data from the body 
app.use(bodyParser.json());

// const names = require('./routes/api/names');



const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/names', name);

// app.get('/api/names', (req, res) => {
//     res.json(Data);
//     db.User.findAll({})
//     .then( (allUsers) => {
//         res.json(allUsers)
//     })
// });

// app.get('/api/names/male', (req, res) => {
//     res.json(Data.male);
// });

// app.get('/api/names/female', (req, res) => {
//     res.json(Data.female);
// });

// app.get('/api/names/female/:id', (req, res) => {
//     const person = Data.female.find(x => x._id === parseInt(req.params.id))
//     if(!person) res.status(404).send('Name not found');
//     res.send(person);
// });

// app.get('/api/names/male/:id', (req, res) => {
//     const person = Data.male.find(x => x._id === parseInt(req.params.id))
//     if(!person) res.status(404).send('Name not found');
//     res.send(person);
// });

const port = 5000;

app.listen(port, () => console.log(`server started on ${port}`));