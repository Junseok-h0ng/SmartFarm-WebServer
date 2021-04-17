const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const {User} = require('../models/User');
const {naver} = require('./oauth.json');

module.exports = () =>{
    
passport.use(new NaverStrategy({
    clientID: naver.client_id,
    clientSecret: naver.client_secret,
    callbackURL: naver.callbackURL
},
 async (accessToken, refreshToken, profile, done)=> {
        const email = profile.emails[0].value;
        if(!email){
            return done(null,false);
        }else{
            User.findOne({email:email},(err,user)=>{
                if(user && user.type === 'Naver'){
                    console.log(user);
                    return done(null,user);
                }else{
                    const userData = {
                        name: profile.displayName,
                        email:email,
                        pwd:null,
                        type:'Naver' 
                    }
                    new User(userData).save((err,user)=>{
                        if(err) throw err;
                        return done(null,user);
                    })
                }
            })
        }
       
    }
));
}
