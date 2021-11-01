 const mongoose = require('mongoose')

 const Schema = mongoose.Schema

 const userSchema = new Schema({
     _id:String,
     email: String,
     password: String,
     test:Boolean,
     answers:Array
 })

 module.exports = mongoose.model('user',userSchema,'users')