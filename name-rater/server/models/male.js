const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        default: 1
    }
});

module.exports = Male = mongoose.model('Male', MaleSchema);