const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    address: {
        type:String,
        required:true,
        trim:true
    }

},{timestamps: true });

module.exports = mongoose.model('User',userSchema)