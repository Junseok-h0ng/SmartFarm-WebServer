const passport = require('passport');
const {User} = require('../models/User');
const localStrategey = require('./localStrategy');

module.exports = () =>{
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        User.findById(id, (err, user)=>{
            done(err, user);
        });
    });
    localStrategey();
}