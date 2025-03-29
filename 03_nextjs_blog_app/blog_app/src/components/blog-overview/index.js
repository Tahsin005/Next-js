'use client';

import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const initialBlogFormData = {
    title: '',
    description: ''
}

const BlogOverView = ({ blogList }) => {
    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
    const [currentEditedBlogID, setCurrentEditedBlogID] = useState(null);

    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, []);

    const handleSaveBlogData = async () => {
        try {
            setLoading(true);
            const apiResponse =
                currentEditedBlogID !== null
                ? await fetch(`/api/update-blog?id=${currentEditedBlogID}`, {
                    method: "PUT",
                    body: JSON.stringify(blogFormData),
                    })
                : await fetch("/api/add-blog", {
                    method: "POST",
                    body: JSON.stringify(blogFormData),
                    });
            const result = await apiResponse.json();
            if (result?.success) {
                setBlogFormData(initialBlogFormData);
                setOpenBlogDialog(false);
                setLoading(false);
                setCurrentEditedBlogID(null);
                router.refresh();
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setBlogFormData(initialBlogFormData);
        }
    }

    async function handleDeleteBlogByID(getCurrentID) {
        try {
            const apiResponse = await fetch(`/api/delete-blog?id=${getCurrentID}`, {
                method: "DELETE",
            });

            const result = await apiResponse.json();

            if (result?.success) router.refresh();
        } catch (e) {
            console.log(e);
        }
    }

    function handleEdit(getCurrentBlog) {
        setCurrentEditedBlogID(getCurrentBlog?._id);
        setBlogFormData({
          title: getCurrentBlog?.title,
          description: getCurrentBlog?.description,
        });
        setOpenBlogDialog(true);
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
                currentEditedBlogID={currentEditedBlogID}
                setCurrentEditedBlogID={setCurrentEditedBlogID}
            >
            </AddNewBlog>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {blogList && blogList.length > 0 ? (
                    blogList.map((blogItem, index) => (
                        <Card key={index} className="p-5 shadow-lg bg-white">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold text-gray-800">
                                {blogItem?.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">
                                {blogItem?.description}
                                </CardDescription>
                                <div className="mt-5 flex gap-4 items-center">
                                    <Button
                                        className="bg-blue-500 hover:bg-blue-600 text-white"
                                        onClick={() => handleEdit(blogItem)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        className="bg-red-500 hover:bg-red-600 text-white"
                                        onClick={() => handleDeleteBlogByID(blogItem._id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                    ) : (
                        <Label className="text-2xl font-bold text-white text-center">
                            No Blogs Found! Add a New One 📖
                        </Label>
                )}
            </div>
        </div>
    )
}

export default BlogOverView