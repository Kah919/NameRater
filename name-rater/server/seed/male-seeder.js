const mongoose = require('mongoose');
const Male = require('../models/Male');
const Data = require('../data.js').male;
let done = 0;

const seedData = data => {
    for(let i = 0; i < data.length; i++) {
        const name = Female({
            name: data.name,
            count: data.count
        });

        name.save((err, result) => {
            done++;
            if(done === Data.length) {
                exit();
            }
        });
    }
}

const exit = () => {
    mongoose.disconnect();
    console.log('exiting')
}

seedData(Data);