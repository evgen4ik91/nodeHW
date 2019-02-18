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
    description: String,
    content: String,
    author: String,
    publishedAt: Date,
    url: String,
    urlToImage: String,
    isLocal: Boolean
})
module.exports = mongoose.model('news', Schema)