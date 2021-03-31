const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/',(req,res)=>{
    // res.send('fasd');
    res.json({'response':'success'})
});

router.post('/images',(req,res)=>{
    const filename = 'uploads/1617021913938.png'
    fs.readFile(filename,function(err,data){
        if(err) throw err;
        console.log(data);
        res.writeHead(200,{'Content-Type': 'image/png'});
        res.write(data,'utf-8');
        res.end();
    });
});

module.exports = router;