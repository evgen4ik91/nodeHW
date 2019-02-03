const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    id: String,
    title: String,
    text: String,
    date: Date,
})
module.exports = db.model('news', Schema)