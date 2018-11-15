const User = require('../models/User')
const Songs = require('../models/Songs')

const songsController = {
    index: (req, res) => {
        User.findById(req.params.id).populate('songs').then((user) => {
            res.send(user.songs)
        })
    },
    create: (req, res) => {
        User.findById(req.params.id).then((user) => {
            Songs.create(req.body).then((searchedSong) => {
                user.songs.push(searchedSong)
                user.save()
                res.send(searchedSong)
            })
        })
    },
    show: (req, res) => {
        Songs.findById(req.params.id).then((song) => {
            res.send(song)
        })
    },
    update: (req, res) => {
        Songs.findByIdAndUpdate(req.params, req.body, {new: true}).then((updatedSong) => {
            updatedSong.save()
            res.send(updatedSong)
        })
    },
    delete: (req, res) => {
        Songs.findByIdAndRemove(req.params.id).then(() => {
            res.send(200)
        })
    }
}

module.exports = songsController