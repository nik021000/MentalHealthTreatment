 const mongoose = require('mongoose')

 const Schema = mongoose.Schema

 const userSchema = new Schema({
     _id:String,
     email: String,
     password: String,
     test:Boolean,
     answers:String,
     Depression:String,
     Anxiety:String,
     Stress:String
 })

 module.exports = mongoose.model('user',userSchema,'users')