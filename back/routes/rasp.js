const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/',(req,res)=>{
    // res.send('fasd');
    res.json({'response':'success'})
});

router.post('/images',async(req,res)=>{
    const files = ['1617021913938.png','1617023151405.png']
    const filesData = files.map((file)=>{
        return fs.readFileSync('uploads/'+file)
    });
    res.writeHead(200,{'Content-Type': 'image/png'});
    res.send(filesData);
});

module.exports = router;