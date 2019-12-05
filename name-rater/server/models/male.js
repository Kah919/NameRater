const mongoose = require('mongoose');

const maleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    count: Number
});

module.exports = mongoose.model('Male', maleSchema);