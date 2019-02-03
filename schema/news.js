const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: String,
    date: Date,
})
module.exports = mongoose.model('news', Schema)