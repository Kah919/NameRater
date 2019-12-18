const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FemaleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 1
    }
});

module.exports = Female = mongoose.model('Female', FemaleSchema);