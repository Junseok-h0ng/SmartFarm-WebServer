const express = require('express');
const router = express.Router();

const {Comment} = require('../models/Comment');

router.post('/',(req,res,next)=>{
    const comment = new Comment(req.body);
    comment.save((err,doc)=>{
        console.log(err);
        if (err) return res.status(401).send(err);
        res.status(200).send();
    });
});

router.post('/getComment',(req,res,next)=>{

    Comment.find({postId:req.body.postId})
    .populate('author','_id name')
    .exec((err,doc)=>{
        console.log(doc);
        if (err) return res.status(401).send(err);
        res.status(200).send(doc);
    });
})


module.exports = router;