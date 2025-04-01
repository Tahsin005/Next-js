'use server';

import connectDB from "@/database";
import User from "@/models";
import bcryptjs from "bcryptjs";

export async function registerUserAction(formData) {
    await connectDB();

    try {
        const { userName, email, password } = formData;

        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return {
                success: false,
                message: "User already exists! Please login",
            };
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newlyCreatedUser = new User({
            userName,
            email,
            password: hashedPassword,
        });

        const savedUser = await newlyCreatedUser.save();

        if (savedUser) {
            return {
                success: true,
                message: "User registered successfully",
                data: JSON.parse(JSON.stringify(savedUser)),
            };
        } else {
            return {
                success: false,
                message: "Some error occurred! Please try again..",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Some error occurred! Please try again",
        };
    }
}
