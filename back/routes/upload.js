const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
      }
    }),
  });

router.post('/',upload.single('img'),(req,res)=>{
    console.log(req.file);
    res.json({ url : `/img/${req.file.filename}`});  
});

module.exports = router;