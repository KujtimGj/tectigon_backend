const express = require("express");
const router = express.Router();

const {getAllBlogs, createBlog, getSingleBlog, deleteBlog, updateBlog} = require("../controller/blogController")


// GET, Get By ID, POST, PATCH,DELETE
router.get("/",getAllBlogs);
router.get("/:id",getSingleBlog);
router.post("/",createBlog);
router.delete("/:id",deleteBlog);
router.put("/:id",updateBlog);

module.exports=router