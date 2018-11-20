const User = require('../models/User')
const SearchList = require('../models/SearchList')

const searchListController = {
    index: (req, res) => {
        User.findById(req.params.id).populate('SearchList').then((user) => {
            res.send(user.searchList)
        })
    },
    create: (req, res) => {
        User.findById(req.params.id).then((user) => {
            SearchList.create(req.body).then((searchedLyric) => {
                user.searchList.push(searchedLyric)
                user.save()
                res.send(searchedLyric)
            })
        })
    },
    show: (req, res) => {
        SearchList.findById(req.params.id).then((searchedLyric) => {
            res.send(searchedLyric)
        })
    },
    update: (req, res) => {
        SearchList.findByIdAndUpdate(req.params, req.body, {new: true}).then((updatedSearchList) => {
            updatedSearchList.save()
            res.send(updatedSearchList)
        })
    },
    delete: (req, res) => {
        SearchList.findByIdAndRemove(req.params.id).then(() => {
            res.send(200)
        })
    }
}

module.exports = searchListController