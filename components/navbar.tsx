"use client";

import Link from "next/link";
import { useState } from "react";
import { useClerk, useUser, useAuth, UserButton } from "@clerk/nextjs";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { signOut } = useClerk();
  const { isSignedIn } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/logo.png"
          alt="Logo"
          className="h-8 w-8"
          width={256}
          height={256}
          quality={100}
        />
        <span className="text-xl font-bold">AI Support</span>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" onClick={toggleTheme}>
          {isDarkMode ? (
            <MdOutlineWbSunny className="h-6 w-6 text-yellow-500" />
          ) : (
            <FaRegMoon className="h-6 w-6 text-gray-500" />
          )}
        </Button>
        {isSignedIn ? (
          <Link href="/chatPage">
            <Button variant="premium">Go to Chat</Button>
          </Link>
        ) : (
          <Link href="/sign-in">
            <Button variant="premium">Sign In</Button>
          </Link>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
