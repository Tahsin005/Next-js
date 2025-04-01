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
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                <form onSubmit={handleSignIn} className="space-y-4">
                    {userLoginFormControls.map((controlItem) => (
                        <div key={controlItem.name}>
                            <Label className="text-gray-700 mb-3">{controlItem.label}</Label>
                            <CommonFormElement
                                currentItem={controlItem}
                                value={signInFormData[controlItem.name]}
                                onChange={(event) =>
                                    setSignInFormData({
                                        ...signInFormData,
                                        [event.target.name]: event.target.value,
                                    })
                                }
                            />
                        </div>
                    ))}
                    <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
