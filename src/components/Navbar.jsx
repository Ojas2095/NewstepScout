import React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const loc = useLocation();

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between glass shadow-md">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
          NS
        </div>
        <div>
          {/* ✅ Fixed colors: white by default, softer in dark mode */}
          <Link to="/" className="text-lg font-extrabold text-white dark:text-gray-200">
            NewstepScout
          </Link>
          <div className="text-xs opacity-80">Private idea vault • Global impact</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link className={`px-3 py-2 rounded-md ${loc.pathname === "/" ? "bg-white/80 dark:bg-gray-800 text-indigo-700" : "hover:bg-white/10"}`} to="/">Home</Link>
        <Link className={`px-3 py-2 rounded-md ${loc.pathname === "/submit" ? "bg-white/80 dark:bg-gray-800 text-indigo-700" : "hover:bg-white/10"}`} to="/submit">Submit</Link>
        <Link className={`px-3 py-2 rounded-md ${loc.pathname === "/dashboard" ? "bg-white/80 dark:bg-gray-800 text-indigo-700" : "hover:bg-white/10"}`} to="/dashboard">Dashboard</Link>
        <Link to="/login" className="px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow">Sign in</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
