'use client';

import { useState } from "react";
import AddNewBlog from "../add-new-blog";

const initialBlogFormData = {
    title: '',
    description: ''
}

const BlogOverView = () => {
    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

    const handleSaveBlogData = async () => {
        try {
            setLoading(true);
            const apiResponse = await fetch('/api/add-blog', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blogFormData)
            });

            const result = await apiResponse.json();
            if (result?.success) {
                setBlogFormData(initialBlogFormData);
                setOpenBlogDialog(false);
                setLoading(false);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setBlogFormData(initialBlogFormData);
        }
    }
    return (
        <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
            <AddNewBlog
                openBlogDialog={openBlogDialog}
                setOpenBlogDialog={setOpenBlogDialog}
                blogFormData={blogFormData}
                setBlogFormData={setBlogFormData}
                loading={loading}
                setLoading={setLoading}
                handleSaveBlogData={handleSaveBlogData}
            >
            </AddNewBlog>
            <div>
                Blog List Section
            </div>
        </div>
    )
}

export default BlogOverView