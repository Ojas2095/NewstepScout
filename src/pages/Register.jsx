import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    toast.loading("Creating account...");
    await new Promise((r) => setTimeout(r, 700));
    toast.dismiss();
    toast.success("Account created — welcome!");
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="glass p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4">Create an account</h3>
        <form onSubmit={submit} className="space-y-4">
          <input type="text" required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-lg border" />
          <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg border" />
          <input type="password" required placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)} className="w-full p-3 rounded-lg border" />
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-3 rounded-lg">Create account</button>
        </form>
        <p className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-indigo-600">Sign in</Link></p>
      </motion.div>
    </div>
  );
}
