const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const SearchList = new Schema({
    lyrics: Array
})

module.exports = mongoose.model('SearchList', SearchList)