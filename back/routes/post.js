const express = require('express');
const router = express.Router();

const {Post} = require('../models/Post');

router.post('/',(req,res,next)=>{
    const post = new Post(req.body);
    post.save((err,doc)=>{
        if(err) return err;
        res.status(200).send();
    })
});

module.exports = router;