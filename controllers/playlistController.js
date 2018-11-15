const User = require('../models/User')
const Playlist = require('../models/Playlist')

const playlistController = {
    create: (req, res) => {
        User. findById(req.params.id).then((user) => {
            Playlist.create(req.body).then((newPlaylist) => {
                user.save()
                res.send(newPlaylist)
            })
        })
    }
}

module.exports = playlistController