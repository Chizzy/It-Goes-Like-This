const User = require('../models/User')
const Playlist = require('../models/Playlist')

const playlistController = {
    create: (req, res) => {
        User.findById(req.params.id).then((user) => {
            Playlist.create(req.body).then((newPlaylist) => {
                user.save()
                res.send(newPlaylist)
            })
        })
    },
    show: (req, res) => {
        Playlist.findById(req.params.id).then((playlist) => {
            res.send(playlist)
        })
    },
    update: (req, res) => {
        Playlist.findByIdAndUpdate(req.params, req.body, {new: true}).then((updatePlaylist) => {
            updatePlaylist.save()
            res.send(updatePlaylist)
        })
    }
}

module.exports = playlistController