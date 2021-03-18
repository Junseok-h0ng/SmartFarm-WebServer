const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    // res.send('fasd');
    res.json({'response':'success'})
});

module.exports = router;