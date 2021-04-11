const express = require('express');
const router = express.Router();

const {Post} = require('../models/Post');

router.post('/contents',(req,res,next)=>{
    Post.find({})
    .skip(0).limit(5)
    .populate('writer','name email')
    .exec((err,doc)=>{
        if(err) return res.status(401).send(err);
        res.status(200).send(doc);
    });
});

router.post('/user/contents',(req,res,next)=>{
    console.log(req.body);
    Post.find({writer:req.body.userId})
    .populate('writer', 'name email')
    .exec((err,doc)=>{
        if(err) return res.status(401).send(err);
        res.status(200).send(doc);
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