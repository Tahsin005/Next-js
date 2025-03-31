"use server";

import connectDB from "@/database";
import User from "@/models/user";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// export async function fetchListOfProducts() {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     return data?.products;
// }

// add new user
export async function addNewUserAction(formData, pathToRevalidate) {
    await connectDB();

    try {
        const newlyCreatedUser = await User.create(formData);
        if (newlyCreatedUser) {
            revalidatePath(pathToRevalidate);
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
export async function fetchUsersAction() {
    await connectDB();

    try {
        const listOfUsers = await User.find({});
        if (listOfUsers) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(listOfUsers)),
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

// edit user
export async function editUserAction(currentUserID, formData, pathToRevalidate) {
    await connectDB();

    try {
        const { firstName, lastName, email, address } = formData;

        const updatedUser = await User.findOneAndUpdate(
            {
                _id: currentUserID,
            },
            { firstName, email, lastName, address },
            { new: true }
        );
        if (updatedUser) {
            revalidatePath(pathToRevalidate);
            return {
                success: true,
                message: "User updated successfully",
            };
        } else {
            return {
                success: false,
                message: "Not able to update the user! Please try again",
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


// delete user
export async function deleteUserAction(currentUserID, pathToRevalidate) {
    await connectDB();

    try {
        const deletedUser = await User.findByIdAndDelete(currentUserID);
        if (deletedUser) {
            revalidatePath(pathToRevalidate)
            return {
                success: true,
                message: "User deleted successfully",
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
