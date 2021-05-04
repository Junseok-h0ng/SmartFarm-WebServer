const express = require('express');
const passport = require('passport');
const router = express.Router();

const {isLoggedIn} = require('./middleware');
const {User} = require('../models/User');

router.get('/',isLoggedIn,(req,res)=>{
    const user = Object.assign({},req.user.toJSON());
    delete user.password;
    return res.status(200).json(user);
});


router.post('/login',(req,res,next)=>{
   passport.authenticate('local',(err,user)=>{
       if(err) return next(err);
       return req.login(user,async (err)=>{
           if(err) return next(err);
           const userData = Object.assign({},user.toJSON());
           delete userData.password;
           return res.json(userData);
       });
   })(req,res,next);
});

router.post('/logout',(req,res,next)=>{
    req.logout();
    req.session.destroy();
    res.status(200).send({success:true});
})

router.post('/register',(req,res,next)=>{
    const email = req.body.email;
    User.find({email:email,type:null})
    .exec((err,user)=>{
        if(user[0]){
            res.status(401).send();
        }else{
            new User(req.body)
            .save((err)=>{
                res.status(200).send();
            });
        }
    });

});
module.exports = router;
