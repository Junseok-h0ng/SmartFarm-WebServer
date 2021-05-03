const express = require('express');
const router = express.Router();

const {Farm} = require('../models/Farm');

const fs = require('fs');

router.get('/',(req,res)=>{
    // res.send('fasd');
    res.json({'response':'success'})
});

router.post('/images',(req,res)=>{
    const files = ['sample1.jpg','sample2.jpg','sample3.jpg','sample4.jpg','sample5.jpg','sample6.jpg','sample7.jpg','sample8.jpg']
    const filesData = files.map((file)=>{
        return new Buffer(fs.readFileSync('uploads/'+file)).toString('base64');
    });
    res.send(filesData);
});

router.post('/',(req,res)=>{
    Farm.find({userId:req.body.userId,address:req.body.address})
    .exec((err,doc)=>{
        if (err) return res.status(401).send(err);
        //중복 등록 방지
        if(!doc[0]){
            const farm = new Farm(req.body);
            farm.save((err,doc)=>{
                if (err) return res.status(401).send(err);
                res.status(200).send(doc);
            });
        }else{
            return res.status(401).send('이미 등록된 정보입니다.');
        }

    })
  
})

module.exports = router;