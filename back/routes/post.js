const express = require('express');
const router = express.Router();

const {Post} = require('../models/Post');
const {User} = require('../models/User');

router.post('/contents',(req,res,next)=>{
    const start = req.body.start;
    const end = req.body.end;
    console.log(req.body);
    Post.find({})
    .skip(start).limit(end)
    .populate('writer','name email')
    .exec((err,contents)=>{
	console.log(err,contents);
        if(err) return res.status(401).send(err);
        res.status(200).send(contents);
    });
});

router.post('/user/contents',(req,res,next)=>{
    const start = req.body.start;
    const end = req.body.end;
    console.log(req.body);
    Post.find({writer:req.body.userId})
    .skip(start).limit(end)
    .populate('writer', 'name email')
    .exec((err,contents)=>{
        console.log(err);
        if(err) return res.status(401).send(err);
        console.log(contents);
        res.status(200).send(contents);
    })
})

router.post('/',(req,res,next)=>{
    const post = new Post(req.body);
    post.save((err,post)=>{
        if(err) return res.status(401).send(err);
        Post.find({_id:post._id})
        .populate('writer', 'name email')
        .exec((err,doc)=>{
            if(err) return res.status(401).send(err);
            res.status(200).send(doc);
        })
        
    })
});

module.exports = router;
