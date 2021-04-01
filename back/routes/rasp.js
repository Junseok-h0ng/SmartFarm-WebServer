const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/',(req,res)=>{
    // res.send('fasd');
    res.json({'response':'success'})
});

router.post('/images',(req,res)=>{
    const files = ['sample1.jpg','sample2.jpg','sample3.jpg','sample4.jpg','sample5.jpg','sample6.jpg','sample7.jpg','sample8.jpg']
    const filesData = files.map((file)=>{
        return new Buffer(fs.readFileSync('uploads/'+file)).toString('base64')
    });
    res.send(filesData);
});

module.exports = router;