const User = require
const Songs = require('../models/Songs')

const songsController = {
    index: (req, res) => {
        User.findById(req.params.id).populate('songs').then((user) => {
            res.send(user.songs)
        })
    },
    create: (req, res) => {
        User.findById(req.params).then((user) => {
            Songs.create(req.body).then((searchdSong) => {
                user.songs.push(searchdSong)
                user.save()
                res.send(searchdSong)
            })
        })
    }
}

module.exports = songsController