import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProfileMenu from "./ProfileMenu";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Top Navigation */}
      <Navbar />

      <div className="flex flex-1">
        {/* Optional Sidebar (for dashboard-style navigation) */}
        <Sidebar />

        {/* Main content area */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

        {/* Right-side profile menu */}
        <ProfileMenu />
      </div>
    </div>
  );
}
