const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    answers:String,
    Depression:String,
    Anxiety:String,
    Stress:String
})

module.exports = mongoose.model('posts',userSchema,'users')