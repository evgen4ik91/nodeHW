const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    name: String,
    fbID: String,
    login: String,
    pass: String,
})
module.exports = db.model('user', Schema)