 const mongoose = require('mongoose')

 const Schema = mongoose.Schema

 const userSchema = new Schema({
     email: String,
     password: String,
     test:Boolean
 })

 module.exports = mongoose.model('user',userSchema,'users')