const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    _id: String,
    course:String,
    video1:Number,
    video2:Number,
    Article1:String,
    email:String
})

module.exports = mongoose.model('progress',userSchema,'Progress')