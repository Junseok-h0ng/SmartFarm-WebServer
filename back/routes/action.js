const express = require('express');
const router = express.Router();

const {Like} = require('../models/Like');
const {Dislike} = require('../models/Dislike');

router.post('/upLike',(req,res,next)=>{
    const like = new Like(req.body);
    like.save((err)=>{
        if(err) return res.status(401).send();
        Dislike.findOneAndDelete(req.body)
        .exec((err)=>{
            if(err) return res.status(401).send();
            res.status(200).json({success:true});
        })
        
    });
});

router.post('/unLike',(req,res,next)=>{
    Like.findOneAndDelete(req.body)
    .exec((err)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true});
    })    
});

router.post('/upDislike',(req,res,next)=>{
    const dislike = new Dislike(req.body);
    dislike.save((err)=>{
        if(err) return res.status(401).send();
        Like.findOneAndDelete(req.body)
        .exec((err)=>{
            if(err) return res.status(401).send();
            res.status(200).json({success:true});
        })
        
    });
});

router.post('/unDislike',(req,res,next)=>{
    Dislike.findOneAndDelete(req.body)
    .exec((err)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({success:true});
    });
});

router.post('/getLikes',(req,res,next)=>{

    //userID 제거
    const filteredData = Object.assign({},req.body);
    delete filteredData.userId;

    Like.find(filteredData)
    .exec((err,likes)=>{
        if(err) return res.status(401).send(err);
        res.status(200).json({success:true,likes});
    });
});

router.post('/getDislikes',(req,res,next)=>{

    //userID 제거
    const filteredData = Object.assign({},req.body);
    delete filteredData.userId;

    Dislike.find(filteredData)
    .exec((err,dislikes)=>{
        if(err) return res.status(401).send(err);
        res.status(200).json({success:true,dislikes});
    })
})




module.exports = router;