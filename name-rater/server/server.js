const Data = require('./data.js');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Male = require('./models/Male');
const Female = require('./models/Female');
require("dotenv").config();
const name = require('./routes/api/names');
const cors = require('cors');
const bodyParser = require('body-parser'); // allow us to take request and get data from the body 
app.use(bodyParser.json(), cors());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/names', name);
// app.get('/api/names', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
//   })  

const port = 5000;

app.listen(port, () => {
    console.log(`server started on ${port}`)
    // console.log(`CORS-enabled web server listening on ${port}`)
});


