const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    responseTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    },
    contents:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
});

const Comment = mongoose.model('Comment',commentSchema)

module.exports = {Comment};