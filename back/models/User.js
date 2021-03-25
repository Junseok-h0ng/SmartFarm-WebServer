const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String
    },
    toke:{
        type:String
    },
    tokenExp:{
        type:Number
    }
});

const User = mongoose.model('User',userSchema)

module.exports = {User};