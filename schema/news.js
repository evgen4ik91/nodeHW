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
    content: String,
    author: String,
    publishedAt: Date,
    url: String,
    urlToImage: String,
})
module.exports = mongoose.model('news', Schema)