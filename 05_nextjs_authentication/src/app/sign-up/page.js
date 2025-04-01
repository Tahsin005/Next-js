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

    async function handleSignUp() {
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
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Registration</h1>
                <form action={handleSignUp} className="space-y-4">
                    {userRegistrationFormControls.map((controlItem) => (
                        <div key={controlItem.name}>
                            <Label className="block text-gray-700 font-medium mb-2">
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
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    ))}
                    <Button
                        disabled={!handleSignUpBtnValid()}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-65"
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
