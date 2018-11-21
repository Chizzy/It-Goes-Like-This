const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    image: String,
    searchList: [{
        type: Schema.Types.ObjectId,
        ref: 'SearchList'
    }],
})

module.exports = mongoose.model('User', User)