const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express(); 

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
      useNewUrlParser:true,useUnifiedTopology:true,
      useCreateIndex:true,useFindAndModify:false
}).then(()=> console.log(process.env.NODE_ENV+"모드로 DB연결했습니다."));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/rasp',require('./routes/rasp'));
app.use('/user',require('./routes/user'));

app.get('/',function(req,res){
      res.send('indexPage1')
});

app.listen(3000,function(){
      console.log('server is running at 3000');
});
