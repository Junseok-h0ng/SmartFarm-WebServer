const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');
const hpp = require('hpp');
const helmet = require('helmet');
const app = express(); 

const config = require('./config/key');

const prod = process.env.NODE_ENV === 'production';
console.log(prod);

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
      useNewUrlParser:true,useUnifiedTopology:true,
      useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log(process.env.NODE_ENV+"모드로 DB연결했습니다."));

if(prod){
    //보안 관련 라이브러리
    app.use(hpp());
    app.use(helmet());
    app.use(cors({
        origin: /eouleuda\.kro\.kr$/,
        credentials:true,
    }));
}else{
    app.use(cors({
        origin:true,      
        credentials:true
    }));
}

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
      secret:process.env.COOKIE_SECRET,
      resave:false,
      saveUninitialized:true,
      cookie:{
            httpOnly:true,
            secure:false,
            path:'/',
            domain:'.eouleuda.kro.kr'
        },
      name:'rnbck'
}));

app.use(express.static("public"));
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb",extended:false }));


app.use(passport.initialize());
app.use(passport.session());

passportConfig();

//다른 서비스가 기능을 실행할 수 있게 열어둠
app.use('/api/rasp',require('./routes/rasp'));
app.use('/api/user',require('./routes/user'));
app.use('/api/upload',require('./routes/upload'));
app.use('/api/post',require('./routes/post')); 
app.use('/api/comment',require('./routes/comment'));
app.use('/api/action',require('./routes/action'));
app.use('/api/auth',require('./routes/auth'));

app.get('/',function(req,res){
      res.send();
});

app.listen(8080,function(){
      console.log('server is running at 8080');
});
