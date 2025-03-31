"use server";

import connectDB from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

// export async function fetchListOfProducts() {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     return data?.products;
// }

// add new user
export async function addNewUserAction(formData) {
    await connectDB();

    try {
        const newlyCreatedUser = await User.create(formData);
        if (newlyCreatedUser) {
            return {
                success: true,
                message: "User added successfully",
            };
        } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Some error occured! Please try again",
        };
    }
}

// get user

// edit user

// delete user
