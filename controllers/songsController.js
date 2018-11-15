const User = require
const Songs = require('../models/Songs')

const songsController = {
    index: (req, res) => {
        User.findById(req.params.id).populate('songs').then((user) => {
            res.send(user.songs)
        })
    }
}

module.exports = songsController