const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type:String
    },
    contents:{
        type:String
    },
    image:{
        type:Array
    },
    data:{
        type:Object
    },
    writer:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps: true
});

const Post = mongoose.model('Post',postSchema)

module.exports = {Post};