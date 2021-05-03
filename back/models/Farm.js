const mongoose = require('mongoose');

const farmSchema = mongoose.Schema({
    name:{
        type:String
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    address:{
        type:String
    }
});

const Farm = mongoose.model('Farm',farmSchema)

module.exports = {Farm};