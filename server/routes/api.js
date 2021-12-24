const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require('../models/user')
const Answers = require('../models/answers')
const Progress = require('../models/progress')
const getProgress = require('../models/getProgress')
const mongoose = require('mongoose')
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
const Post = require('../models/question');
const answers = require('../models/answers')
const progress = require('../models/progress')

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

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('unauthorized request')
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('unauthorized request')
    }
    req.userId = payload.subject
    next()
}

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
                    res.status(200).send(user)
                }
            }
        }
    })
})

router.get('/question',(req,res)=>{
    Post.find({}, (err, posts)=>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).send(posts)
        }
    });
})

router.post('/answer',(req,res)=>{
    let user = new User(res);
    let email = req.body['email'];
    console.log(req.body)
    User.findOneAndUpdate({email:email},{answers:req.body['answers'],test:true,Depression:req.body['Depression'],Anxiety:req.body['Anxiety'],Stress:req.body['Stress']},{new:true},(error,updated)=>{
        if(error){
            console.log(error);
        }else{
            console.log('done');
            res.status(200).send(updated)
        }
    })
});

router.post('/progress',(req,res)=>{
    let userData = req.body
    let user = new Progress(userData)
    email = req.body['email']
    progress.findOneAndUpdate({email:email},{_id:req.body['_id'],course:req.body['course'],video1:req.body['video1'],video2:req.body['video2'],Article1:req.body['Article1']},{upsert:true},(error2,updated)=>{
        if(error2){
            console.log(error2);
        }else{
            console.log('done');
            res.status(200).send(updated)
        }
    })
});

router.post('/getProgress',(req,res)=>{ 
    let userData = req.body
    getProgress.findOne({email: userData.email},(error,user)=>{
        if (error){
            console.log(error)
        }
        else{
            console.log(user)
            res.status(200).send(user)
        }
    })
})

module.exports = router