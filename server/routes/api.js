const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require('../models/user')
const mongoose = require('mongoose')
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
const Post = require('../models/question');

//const db = "mongodb+srv://nikhil:nik%401234@cluster0.tgxkb.mongodb.net/test"
const db = "mongodb://nikhil:nik%401234@cluster0-shard-00-00.tgxkb.mongodb.net:27017,cluster0-shard-00-01.tgxkb.mongodb.net:27017,cluster0-shard-00-02.tgxkb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-e585d6-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(db,err=>{
    if (err){
        console.error('Error!'+err)
    }
    else{
        console.log('Connected to mongodb')
    }
})

router.post('/register',(req,res)=>{
    console.log(req.body)
    let userData = req.body
    console.log(req.body)
    let user = new User(userData)
    user.save((error,registerdUser)=>{
        if (error){
            console.log(error)
        } else{
            let payload={subject: registerdUser._id}
            let token = jwt.sign(payload, "secretKey")
            console.log(token)
            res.status(200).send({token})
        }
    })
})

router.post('/login',(req,res)=>{ 
    let userData = req.body
    User.findOne({email: userData.email},(error,user)=>{
        if (error){
            console.log(error)
        }
        else{
            if(!user){
                res.status(401).send("Invalid Email!")
            }else{
                if (user.password !== userData.password){
                    res.status(401).send("Invalid Password")
                }else{
                    let payload = {subject: user._id}
                    let token = jwt.sign(payload,"secretKey")
                    res.status(200).send({token})
                }
            }
        }
    })
})

router.get('/question',(req,res)=>{
    console.log("hello")
    Post.find({}, (err, posts)=>{
        if(err){
            console.log(err);
        }
        else {
            console.log(posts)
            res.status(200).send(posts)
        }
    });
})

module.exports = router