'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
]

export default function AuthLayout({ children, }: { children: React.ReactNode }) {
    const [input, setInput] = useState("");
    const pathname = usePathname();
    return (
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link className={isActive ? "underline text-blue-500 mr-2" : "mr-2"} href={link.href} key={link.name}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}