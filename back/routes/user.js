const express = require('express');
const passport = require('passport');
const router = express.Router();

// const passport = require('pas')
const {User} = require('../models/User');


router.post('/login',(req,res,next)=>{
   passport.authenticate('local',(err,user)=>{
       if(err) return next(err);
       return req.login(user,(err)=>{
           if(err) return next(err);
           const userData = Object.assign({},user.toJSON());
           delete userData.password;
           return res.send(userData);
       });
   })(req,res,next);
});

router.post('/logout',(req,res,next)=>{
    req.logout();
    req.session.destroy();
    res.status(200).send();
})

router.post('/register',(req,res,next)=>{
    const user = new User(req.body);
    user.save((err,doc)=>{
        if(err) return next(err);
        res.status(200).send();
    });
    
});

module.exports = router;