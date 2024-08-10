import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-800 dark:text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Customer Support with AI
          </h1>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {theme === "dark" ? (
            <SunIcon className="h-5 w-5 text-yellow-400" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-800" />
          )}
        </button>
      </div>
    </header>
  );
}
