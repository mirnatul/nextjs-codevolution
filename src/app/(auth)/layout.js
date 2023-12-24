"use client"; // active
import Link from "next/link";

import { usePathname } from "next/navigation"; // active

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
    const pathname = usePathname(); // active

    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href); // active

                return (
                    <Link
                        className={isActive ? "font-bold mr-4 bg-green-400 p-2" : "text-blue-500 mr-4"} // active
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                );
            })}
            {children}
        </div>
    );
}