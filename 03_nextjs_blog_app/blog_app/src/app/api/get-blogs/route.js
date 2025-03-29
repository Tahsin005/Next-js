import connectDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const allBlogs = await Blog.find({});

        if (allBlogs) {
            return NextResponse.json({
                success: true,
                message: "Blogs fetched successfully",
                data: allBlogs
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Something went wrong"
            })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })
    }
}