import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider.jsx";
import { motion } from "framer-motion";

export default function ProfileMenu() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function onDoc(e) {
      if (!ref.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  if (!user) return null;

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(v => !v)} className="flex items-center gap-2">
        <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white/30" />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-50"
        >
          <div className="px-3 py-2 text-sm">
            <div className="font-medium">{user.name}</div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700"></div>
          <button
            onClick={() => { logout(); setOpen(false); }}
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Sign out
          </button>
        </motion.div>
      )}
    </div>
  );
}
