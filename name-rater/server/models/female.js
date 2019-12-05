const mongoose = require('mongoose');

const femaleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    count: Number
});

module.exports = mongoose.model('Female', femaleSchema);