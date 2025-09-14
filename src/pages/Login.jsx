import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    toast.loading("Signing in...");
    await new Promise((r) => setTimeout(r, 700));
    toast.dismiss();
    // mock success
    toast.success("Signed in!");
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4">Welcome back</h3>
        <form onSubmit={submit} className="space-y-4">
          <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg border" />
          <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-lg border" />
          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg">Sign in</button>
        </form>
        <p className="mt-4 text-sm">New here? <Link to="/register" className="text-indigo-600">Create account</Link></p>
      </motion.div>
    </div>
  );
}
