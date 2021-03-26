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

userSchema.pre('save',function(next){
    let user = this;
    const saltRounds = 10;
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds,(err,salt)=>{
            if(err) return next(err);
            bcrypt.hash(user.password,salt,(err,hash)=>{
                if(err) return next(err);
                user.password = hash;
                next();
            });
        })
    }else{
        next();
    }
});

userSchema.methods.comparePassword = function(plainPassword,cb){
    bcrypt.compare(plainPassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch);
    });
}

const User = mongoose.model('User',userSchema)

module.exports = {User};