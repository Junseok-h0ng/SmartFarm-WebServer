const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',function(req,res){
      res.send('indexPage')
})

app.listen(3000,function(){
      console.log('server is running at 3000');
});