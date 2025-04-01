'use server';

import connectDB from "@/database";
import User from "@/models";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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


export async function loginUserAction(formData) {
    await connectDB();

    try {
        const { email, password } = formData;

        const checkUser = await User.findOne({ email });
        if (!checkUser) {
            return {
                success: false,
                message: "User doesnot exist ! please sign up",
            };
        }

        const checkPassword = await bcryptjs.compare(password, checkUser.password);
        if (!checkPassword) {
            return {
                message: "Password is incorrect please check",
                success: false,
            };
        }

        const createdTokenData = {
            id: checkUser._id,
            userName: checkUser.userName,
            email: checkUser.email,
        };

        const token = jwt.sign(createdTokenData, 'SUIII', {
            expiresIn: "1d",
        });

        const getCookies = cookies();
        getCookies.set("token", token);

        return {
            success: true,
            message: "User logged in successfully",
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Some error occurred! Please try again",
        }
    }
}


export async function fetchAuthUserAction() {
    await connectDB();

    try {
        const getCookies = await cookies();
        const token = await getCookies.get("token")?.value || "";
        if (token === "") {
            return {
                success: false,
                message: "Token is invalid",
            };
        }

        const decodedToken = jwt.verify(token, "SUIII");
        const getUserInfo = await User.findOne({ _id: decodedToken.id });

        if (getUserInfo) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(getUserInfo)),
            };
        } else {
            return {
                success: false,
                message: "Some error occured ! Please try again",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Something went wrong! please try again",
        };
    }
}

export async function logoutAction() {
    const getCookies = cookies();
    getCookies.set("token", "");
}