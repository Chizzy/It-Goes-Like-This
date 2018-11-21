const User = require('../models/User')

const userController = {
    create: (req, res) => {
        User.create(req.body).then((user) => {
            res.send(user)
        })
    },
    show: (req, res) => {
        User.findById(req.params.id).populate('songs').populate('playlist').then((user) => {
            res.send(user)
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }).then((updatedUser) => {
            updatedUser.save()
            res.send(updatedUser)
        })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.id).then(() => {
            res.send(200)
        })
    }
}

module.exports = userController