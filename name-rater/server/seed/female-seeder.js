const mongoose = require('mongoose');
const Female = require('../models/Female');
const Data = require('../data.js').female;

let done = 0;

const seedData = data => {
    for(let i = 0; i < data.length; i++) {
        const name = new Female({
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

