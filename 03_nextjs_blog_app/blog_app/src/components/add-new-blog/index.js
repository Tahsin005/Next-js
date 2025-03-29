'use client';

import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const AddNewBlog = ({ openBlogDialog, setOpenBlogDialog, blogFormData, setBlogFormData, loading, setLoading, handleSaveBlogData, currentEditedBlogID, setCurrentEditedBlogID }) => {
    console.log(blogFormData);

    return (
        <Fragment>
            <div>
                <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
            </div>
            <div>
                <Dialog open={openBlogDialog} onOpenChange={() => {
                    setOpenBlogDialog(false)
                    setBlogFormData({
                        title: '',
                        description: ''
                    })
                    setCurrentEditedBlogID(null);
                }}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogHeader>
                            <DialogTitle>
                                {currentEditedBlogID ? "Edit Blog" : "Add New Blog"}{" "}
                                </DialogTitle>
                            </DialogHeader>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                Title
                                </Label>
                                <Input name="title" placeholder="Enter blog title.." id="title" className="col-span-3" value={blogFormData.title} onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                Description
                                </Label>
                                <Input name="description" placeholder="Enter blog description.." id="description" className="col-span-3" value={blogFormData.description} onChange={(e) => setBlogFormData({ ...blogFormData, description: e.target.value })} />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handleSaveBlogData} type="button">
                                { loading ? "Saving..." : "Save" }
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>
        </Fragment>
    )
}

export default AddNewBlog