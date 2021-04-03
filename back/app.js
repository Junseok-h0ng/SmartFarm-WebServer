const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');
const app = express(); 

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
      useNewUrlParser:true,useUnifiedTopology:true,
      useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log(process.env.NODE_ENV+"모드로 DB연결했습니다."));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false }));
app.use(cors({
      origin:['http://localhost:8080'],
      credentials:true
}));
app.use(cookieParser());
app.use(session({
      secret: "cats",
      resave:false,
      saveUninitialized:true,
      cookie:{
            httpOnly:true,
            secure:false
      },
      name:'muyaho'
}));


app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use('/rasp',require('./routes/rasp'));
app.use('/user',require('./routes/user'));
app.use('/upload',require('./routes/upload'));
app.use('/post',require('./routes/post'));

app.get('/',function(req,res){
      res.send();
});

app.listen(3000,function(){
      console.log('server is running at 3000');
});
