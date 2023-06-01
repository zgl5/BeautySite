const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10


const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,

    },
    password:{
        type: String,
        trim: true,
        required: true
    }, 
    phoneNumber:{
        type:String,
        required: false
    }
},{
    timestamps: true
})

userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });

module.exports =mongoose.model("BeautyUser", userSchema)