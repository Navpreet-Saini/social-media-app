"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow mb-8">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-blue-700 dark:text-blue-200">
          SocialApp
        </Link>
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <span className="flex items-center gap-2 text-gray-700 dark:text-gray-100 font-medium">
                <img
                  src={
                    session.user.profile_picture ||
                    `https://api.dicebear.com/7.x/identicon/svg?seed=${session.user.username || session.user.email}`
                  }
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
                {session.user.name || session.user.username}
              </span>
              <Link
                href="/profile"
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition"
              >
                Profile
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
                className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded hover:bg-red-200 dark:hover:bg-red-800 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 font-semibold transition"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold transition"
              >
                Sign Up
              </Link>
            </>
          )}
          {/* Always show dark mode toggle at the end */}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
