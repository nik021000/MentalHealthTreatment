const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    
    answers:Array
})

module.exports = mongoose.model('posts',userSchema,'users')