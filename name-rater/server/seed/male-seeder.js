const mongoose = require('mongoose');
const Male = require('../models/Male');
const Data = require('../data.js').male;
const db = require('../config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

async function seedNames(data) {
    for(let i = 0; i < data.length; i++) {
        try {
            const newName = await Male.create({
                name: data[i].name,
                count: data[i].count
            })
        } catch(e) {
            console.log(e.message);
            continue;
        }
    }
  }
  
  seedNames(Data)
    .then(() => {
      mongoose.disconnect();
    })

