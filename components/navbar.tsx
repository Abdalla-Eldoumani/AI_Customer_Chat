"use client";

import Link from "next/link";
import { useState } from "react";
import { useClerk, useUser, useAuth, UserButton } from "@clerk/nextjs";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { signOut } = useClerk();
  const { isSignedIn } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

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
        <Button variant="outline" onClick={() => setTheme((theme === "dark" ? "light" : "dark"))}>
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-800" />
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