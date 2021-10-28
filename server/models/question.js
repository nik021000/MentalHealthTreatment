const mongoose = require('mongoose')

const Schema = mongoose.Schema

const questionSchema = new Schema({
    question: String,
    type: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String
})
module.exports = mongoose.model('Post',questionSchema,'Question')