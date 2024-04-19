const Blog = require("../model/blogsModel");

const getAllBlogs = async(req,res)=>{
    try {
        const blog = await Blog.find();
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


const createBlog = async(req,res)=>{
    try {
        const {title,body}=req.body;
        const blog=await Blog.create({title,body});
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



const getSingleBlog = async(req,res)=>{
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id);
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const deleteBlog =async(req,res)=>{
    try {
        const {id}=req.params;
        const blog = await Blog.findByIdAndDelete(id);
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const updateBlog = async(req,res)=>{
    try {
        const {id}=req.params;
        const {title,body}=req.body;
        const blog = await Blog.findByIdAndUpdate(id,{title,body});
        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={getAllBlogs,createBlog,getSingleBlog,deleteBlog,updateBlog}