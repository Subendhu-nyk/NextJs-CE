"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css'


// usePathname only works in client Component, add the useClient directive at the top of the file to use it.All react components are server component by default and hooks can only be used inside client components.
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathname=usePathname()
   

  return (
    <div>      
      {navLinks.map((link) => { 
         const isActive=pathname.startsWith(link.href)
         return (
          <Link           
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" :"text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}