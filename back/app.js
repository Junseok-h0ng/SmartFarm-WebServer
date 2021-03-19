const http = require('http')
const express = require('express'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express(); 
const io = require('socket.io');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/rasp',require('./routes/rasp'))

app.get('/',function(req,res){
      res.send('indexPage1')
});


const httpServer = http.createServer(app).listen(3000, () => { 
      console.log("포트 3000에 연결되었습니다."); 
});

const socketServer = io(httpServer,{
      cors:{
            origin: 'http://localhost:8080'
      }
});

socketServer.on("connect", (socket) => { 
      socket.emit('hello','world1');
});

// app.listen(3000,function(){
//       console.log('server is running at 3000');
// });