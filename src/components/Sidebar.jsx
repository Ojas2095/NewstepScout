import React from "react";
import { Link } from "react-router-dom";
import { Home, BarChart2, FolderPlus } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-72 p-6 gap-4">
      <div className="glass rounded-xl p-4 shadow-lg">
        <div className="text-sm font-medium text-gray-500 mb-2">Quick Links</div>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
            <Home /> Overview
          </Link>
          <Link to="/submit" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
            <FolderPlus /> Submit Idea
          </Link>
          <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
            <BarChart2 /> Insights
          </Link>
        </nav>
      </div>
      <div className="glass rounded-xl p-4 shadow-lg">
        <div className="text-sm font-medium text-gray-500 mb-2">Stats</div>
        <div className="text-2xl font-bold text-indigo-600">You: 5</div>
        <div className="text-sm text-gray-500">World: 1,245</div>
      </div>
    </aside>
  );
}
