const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {google} = require('./oauth.json');
const {User} = require('../models/User');

module.exports = () =>{
  passport.use(new GoogleStrategy({
    clientID: google.client_id,
    clientSecret: google.client_secret,
    callbackURL: "http://api.eouleuda.kro.kr/api/auth/google/callback/",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
      const email = profile.emails[0].value;
      User.findOne({email:email},(err,user)=>{
        console.log(user);
        if(user && user.type === 'Google'){
          return done(null,user);
        }else{
            const userData = {
              name:profile.displayName,
              email:email,
              pwd:null,
              type:'Google'
            }
            new User(userData).save((err)=>{
              if(err) throw err;
              return done(null,userData);
            });
        }
      })
  }
));
}
