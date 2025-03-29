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

    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, []);

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
                router.refresh();
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {blogList && blogList.length > 0 ? (
                    blogList.map((blogItem, index) => (
                        <Card className="p-5" Key={index}>
                            <CardContent>
                                <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                                <CardDescription>{blogItem?.description}</CardDescription>
                                <div className="mt-5 flex gap-5  items-center">
                                    <Button onClick={() => handleEdit(blogItem)}>Edit</Button>
                                    <Button onClick={() => handleDeleteBlogByID(blogItem._id)}>
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Label className="text-3xl font-extrabold">
                        No Blog found! Please add one
                    </Label>
                )}
            </div>
        </div>
    )
}

export default BlogOverView