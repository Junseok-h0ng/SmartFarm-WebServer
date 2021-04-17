const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/google',(req,res,next)=>{
    passport.authenticate('google',{ scope: ['profile','email']})(req,res,next);
});

router.get('/google/callback',passport.authenticate('google',{
    failureRedirect:'/'
}),(req,res)=>{
    res.redirect(process.env.FRONT_URL);
});

router.get('/naver',(req,res,next)=>{
    passport.authenticate('naver')(req,res,next);
});

router.get('/naver/callback',passport.authenticate('naver',{
    failureRedirect:process.env.FRONT_URL
}),(req,res)=>{
    res.redirect(process.env.FRONT_URL);
});

router.get('/kakao',(req,res,next)=>{
    passport.authenticate('kakao')(req,res,next);
});

router.get('/kakao/callback',passport.authenticate('kakao',{
    failureRedirect:process.env.FRONT_URL
}),(req,res)=>{
    res.redirect(process.env.FRONT_URL);
});

module.exports = router;
