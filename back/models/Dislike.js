const mongoose = require('mongoose');

const dislikeSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    commentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }
});

const Dislike = mongoose.model('Dislike',dislikeSchema)

module.exports = {Dislike};