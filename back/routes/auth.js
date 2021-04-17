const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/google',(req,res,next)=>{
    passport.authenticate('google',{ scope: ['profile','email']})(req,res,next);
});

router.post('/google',(req,res,next)=>{
    res.send('dd');
});
router.get('/123',(req,res,next)=>{
    res.send('qq');
});


router.get('/google/callback',passport.authenticate('google',{
    failureRedirect:'/'
}),(req,res)=>{
    res.redirect(process.env.FRONT_URL);
});

module.exports = router;
