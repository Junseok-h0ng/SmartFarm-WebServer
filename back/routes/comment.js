const express = require('express');
const router = express.Router();

const {Comment} = require('../models/Comment');

router.post('/',(req,res,next)=>{
    const comment = new Comment(req.body);
    comment.save((err,comment)=>{
        if (err) return res.status(401).send(err);
        Comment.find({'_id':comment._id})
        .populate('writer','_id name')
        .exec((err,doc)=>{
            if(err) return res.status(401).send(err);
            res.status(200).send(doc);
        });
    });
});

router.post('/getComment',(req,res,next)=>{

    Comment.find({postId:req.body.postId})
    .populate('writer','_id name')
    .exec((err,doc)=>{
        if (err) return res.status(401).send(err);
        res.status(200).send(doc);
    });
});

router.post('/delete',(req,res,next)=>{
    Comment.findByIdAndUpdate({_id:req.body.commentId},{contents:'삭제된 댓글입니다.'})
    .populate('writer', '_id name')
    .exec((err,doc)=>{
        if (err) return res.status(401).send(err);
        doc.contents = '삭제된 댓글입니다.';
        res.status(200).send(doc);
    })
})

module.exports = router;