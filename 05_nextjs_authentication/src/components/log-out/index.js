"use client";

import { useRouter } from "next/router";
import { Button } from "../ui/button";
import { logoutAction } from "@/actions";

function Logout() {
    async function handleLogout() {
        await logoutAction();
    }

    return <Button className="bg-purple-500" onClick={handleLogout}>Logout</Button>;
}

export default Logout;
