const passport = require('passport');
const {User} = require('../models/User');
const localStrategey = require('./localStrategy');
const googleStrategy = require('./googleStrategy');
const naverStrategy = require('./naverStrategy');
const KakaoStrategy = require('./kakaoStrategy');


module.exports = () =>{
    passport.serializeUser(function(user, done){
        console.log('serialize');
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done){
        console.log('deserialize');
        // const user = await User.findById(id, (err, user)=>{
        //     done(null, user);
        // });
        const user = await User.findById(id);
            done(null, user);
    });
    localStrategey();
    googleStrategy();
    naverStrategy();
    KakaoStrategy();
}