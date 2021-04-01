const passport = require('passport');
const {User} = require('../models/User');
const localStrategey = require('./localStrategy');

module.exports = () =>{
    passport.serializeUser(function(user, done){
        console.log('serialize');
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done){
        console.log('deserialize');
        User.findById(id, (err, user)=>{
            done(null, user);
        });
    });
    localStrategey();
}