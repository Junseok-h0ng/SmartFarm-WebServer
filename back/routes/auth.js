const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/google',(req,res,next)=>{
    passport.authenticate('google',{ scope: ['profile','email']})(req,res,next);
});

router.get('/google/callback',passport.authenticate('google',{
    failureRedirect:'/'
}),(req,res)=>{
    res.redirect(process.env.SERVER_URL);
});

module.exports = router;