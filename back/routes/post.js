const express = require('express');
const router = express.Router();

const {Post} = require('../models/Post');
const {User} = require('../models/User');
const {Comment} = require('../models/Comment');
const {Like} = require('../models/Like');
const {Dislike} = require('../models/Dislike');

router.post('/contents',(req,res,next)=>{
    const start = req.body.start;
    const end = req.body.end;
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
    Post.find({writer:req.body.userId})
    .skip(start).limit(end)
    .populate('writer', 'name email')
    .exec((err,contents)=>{
        console.log(err);
        if(err) return res.status(401).send(err);
        console.log(contents);
        res.status(200).send(contents);
    });
});

router.post('/user/delete',(req,res,next)=>{
    const postId = req.body.postId;
    
    Post.findByIdAndRemove({_id:postId})
    .exec((err)=>{
        if(err) return res.status(401).send(err);
        Comment.find({postId:postId})
        .exec((err,comments)=>{
            if(err) return res.status(401).send(err);
            console.log(comments)
            comments.map((comment,index)=>{
               Like.deleteOne({commentId:comment._id}).exec();
               Dislike.deleteOne({commentId:comment._id}).exec(); 
            });
        });

        Like.deleteOne({postId:postId}).exec();
        Dislike.deleteOne({postId:postId}).exec();

        Comment.deleteMany({postId:postId})
        .exec((err)=>{
            res.status(200).send();
        })
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
