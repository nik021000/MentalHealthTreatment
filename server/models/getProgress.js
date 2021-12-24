const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
    course:String,
    video1:Number,
    video2:Number,
    Article1:String,
    email:String
})
module.exports = mongoose.model('getProgress',questionSchema,'Progress')