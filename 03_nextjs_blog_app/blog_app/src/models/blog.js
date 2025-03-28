import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;