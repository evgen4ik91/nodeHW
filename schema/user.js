const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fbID: String,
})
module.exports = db.model('users', Schema)