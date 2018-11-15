const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Songs = new Schema ({
    lyrics: String,
    title: String,
    artist: String,
    album: String
})

module.exports = mongoose.model('Songs', Songs)