const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    email: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Songs'
    }],
    playlist: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
})

module.exports = mongoose.model('User', User)