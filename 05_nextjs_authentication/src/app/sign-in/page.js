'use client';

import CommonFormElement from "@/components/form-element/page";
import { initialLoginFormData, userLoginFormControls } from "../utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { loginUserAction } from "@/actions";
import toast from "react-hot-toast";

const SignIn = () => {
    const [signInFormData, setSignInFormData] = useState(initialLoginFormData);
    const router = useRouter();

    async function handleSignIn(event) {
        event.preventDefault();

        const result = await loginUserAction(signInFormData);
        console.log(result);
        if (result?.success) {
            toast.success(result.message);
            router.push("/");
        } else {
            toast.error(result.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 rounded-md">
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-md transform transition-all hover:scale-105 duration-300">
                <h1 className="text-4xl font-extrabold text-center mb-6 tracking-tight">
                    Sign In
                </h1>
                <form onSubmit={handleSignIn} className="space-y-6">
                    {userLoginFormControls.map((controlItem) => (
                        <div key={controlItem.name} className="flex flex-col">
                            <Label className="text-gray-300 mb-2">{controlItem.label}</Label>
                            <CommonFormElement
                                currentItem={controlItem}
                                value={signInFormData[controlItem.name]}
                                onChange={(event) =>
                                    setSignInFormData({
                                        ...signInFormData,
                                        [event.target.name]: event.target.value,
                                    })
                                }
                                className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-blue-400 transition-all"
                            />
                        </div>
                    ))}
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
