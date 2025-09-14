import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Users } from "lucide-react";
import React from "react";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to NewstepScout 🚀
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Share your startup ideas securely. Keep them private, track submissions, and see global contributions.
        </motion.p>

        <motion.a
          href="/submit"
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg text-lg font-semibold hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Your Idea
        </motion.a>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="text-gray-400 mt-2">Your ideas are stored safely and visible only to you.</p>
          </div>
          <div className="flex flex-col items-center">
            <Globe2 className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">Global Insights</h3>
            <p className="text-gray-400 mt-2">Track contributions and discover global innovation trends.</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold">Community Driven</h3>
            <p className="text-gray-400 mt-2">Engage with creators, collaborators, and visionaries worldwide.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} NewstepScout. Built with ❤️ to empower innovation.
      </footer>
    </div>
  );
}
