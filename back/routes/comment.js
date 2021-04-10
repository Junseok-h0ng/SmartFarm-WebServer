const express = require('express');
const router = express.Router();

const {Comment} = require('../models/Comment');

router.post('/',(req,res,next)=>{
    const comment = new Comment(req.body);
    comment.save((err,comment)=>{
        if (err) return res.status(401).send(err);
        Comment.find({'_id':comment._id})
        .populate('author','_id name')
        .exec((err,doc)=>{
            if(err) return res.status(401).send(err);
            res.status(200).send(doc);
        });
    });
});

router.post('/getComment',(req,res,next)=>{

    Comment.find({postId:req.body.postId})
    .populate('author','_id name')
    .exec((err,doc)=>{
        if (err) return res.status(401).send(err);
        res.status(200).send(doc);
    });
})


module.exports = router;