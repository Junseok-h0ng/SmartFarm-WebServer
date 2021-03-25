const express = require('express');
const router = express.Router();

const {User} = require('../models/User');


router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((err,doc)=>{
        if(err) return res.status(401).json({err})
        const user = Object.assign({},doc.toJSON());
        delete user.password;
        res.json(user);
    })
});

router.post('/register',(req,res)=>{
    const user = new User(req.body);
    user.save();
    res.status(200).send();
});

module.exports = router;