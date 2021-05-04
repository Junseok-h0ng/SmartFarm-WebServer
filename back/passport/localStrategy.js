const passport = require('passport');
const {Strategy:LocalStrategy} = require('passport-local');
const {User} = require('../models/User');

module.exports = () =>{
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
        session:true,
        passReqToCallback: true,
        failureFlash:true
    },
       async function(req,email, password, done) {
          User.findOne({ email: email,type:null}, function(err, user){
            if (err) { return done(err); }
            // 유저의 이메일이 없는 경우
            if (!user) {
              return done(null, false,{message:'존재하지 않는 이메일 입니다.'});
            }
            user.comparePassword(password,(err,isMatch)=>{
              if(isMatch){
                return done(null,user);
              }
              //패스워드가 틀린경우
              return done(null,false,{message:'패스워드가 맞지 않습니다.'});
            });
          });
        }
      ));
}