'use client';

import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegistrationFormControls } from "../utils";
import CommonFormElement from "@/components/form-element/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { registerUserAction } from "@/actions";
import toast from "react-hot-toast";

const SignUp = () => {
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
    const router = useRouter();

    function handleSignUpBtnValid() {
        return Object.keys(signUpFormData).every(
            (key) => signUpFormData[key].trim() !== ""
        );
    }

    async function handleSignUp(event) {
        event.preventDefault();

        const response = await registerUserAction(signUpFormData);
        if (response.success) {
            toast.success(response.message);
            console.log(response.data);
            router.push("/sign-in");
        } else {
            toast.error(response.message);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 rounded-md">
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300">
                <h1 className="text-4xl font-extrabold text-center mb-6 tracking-tight">
                    Create Account
                </h1>
                <form onSubmit={handleSignUp} className="space-y-6">
                    {userRegistrationFormControls.map((controlItem) => (
                        <div key={controlItem.name} className="flex flex-col">
                            <Label className="text-gray-300 mb-2">
                                {controlItem.label}
                            </Label>
                            <CommonFormElement
                                value={signUpFormData[controlItem.name]}
                                currentItem={controlItem}
                                onChange={(event) =>
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        [event.target.name]: event.target.value,
                                    })
                                }
                                className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 transition-all"
                            />
                        </div>
                    ))}
                    <Button
                        disabled={!handleSignUpBtnValid()}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50"
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
