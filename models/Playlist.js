const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Playlist = new Schema ({
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Songs'
    }],
    creator: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model('Playlist', Playlist)