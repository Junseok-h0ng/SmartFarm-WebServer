const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    data:{
        type:Object
    }
},{
    timestamps: true
});

const Post = mongoose.model('Post',postSchema)

module.exports = {Post};