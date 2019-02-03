const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false,
    },
    facebookId: String,
})
module.exports = mongoose.model('users', Schema);