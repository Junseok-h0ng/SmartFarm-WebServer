const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy;
const {User} = require('../models/User');
const {kakao} = require('./oauth.json');

module.exports = () =>{
    passport.use(new KakaoStrategy({
        clientID : kakao.client_id,
        callbackURL : kakao.callbackURL
      },
      async (accessToken, refreshToken, profile, done) => {
        const email = profile._json.kakao_account.email;
        //이메일 제공 동의를 안했다면
        if(!email){
            return done(null,false);        
        }else{
            User.findOne({email:email},(err,user)=>{
                if(user && user.type === 'Kakao'){
                    return done(null,user);
                }else{
                    const userData ={
                        name:profile.displayName,
                        email:email,
                        pwd:null,
                        type:'Kakao'
                    }
                    new User(userData).save((err,user)=>{
                        if(err) throw err;
                        return done(null,user);
                    });
                }
            })
        }
    
      }
    ))
}

