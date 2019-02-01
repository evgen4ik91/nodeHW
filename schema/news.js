const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    title: String,
    text: String,
    date: Date,
})
module.exports = db.model('news', Schema)