const mongoose = require('mongoose');
const validator=require("validator");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
})


userSchema.statics.signupUser = async function(firstName,lastName,email,password){
    if(!firstName||!lastName||!email||!password){
        throw Error("All fields should be filled");
    }
    if(!validator.isEmail(email)){
        throw Error("Email is not valid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough!")
    }

    const exists = await this.findOne({email});

    if(exists){
        throw Error("Email is already in use");
    }


    const salt = await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(password,salt);


    const user = await this.create({
        firstName,
        lastName,
        email,
        password:hash
    })

    return user;
}

userSchema.statics.loginUser = async function(email,password){
    if(!email||!password){
        throw Error("All fields must be filled")
    }
    const user = await this.create({email});
    if(!user){
        throw Error("Error email]")
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error("Incorrect password")
    }

    return user;
}


const User = mongoose.model("User",userSchema)
module.exports=User;