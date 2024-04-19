const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const blogs = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})


const Blogs = mongoose.model("Blogs",blogs);
module.exports=Blogs;