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
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedUser) => {
            updatedUser.save()
            res.send(updatedUser)
        })
    }
}