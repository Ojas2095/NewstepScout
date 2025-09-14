import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function SubmitIdea() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (title.trim().length < 3 || body.trim().length < 10) {
      toast.error("Please add a meaningful title and description");
      return;
    }
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 900)); // simulate API
      toast.success("Idea submitted securely ✅");
      setTitle("");
      setBody("");
    } catch (err) {
      toast.error("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const charProgress = Math.min(100, Math.round((body.length / 400) * 100));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Submit your idea</h2>
        <div className="text-sm text-gray-500">Private & encrypted</div>
      </div>

      <form onSubmit={submit} className="glass rounded-2xl p-6 shadow-xl max-w-3xl">
        <label className="block mb-2 text-sm font-medium">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Short memorable title" className="w-full p-3 mb-4 rounded-lg border" />

        <label className="block mb-2 text-sm font-medium">Description</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} rows="6" placeholder="Problem, solution, why now..." className="w-full p-3 mb-2 rounded-lg border" />

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div className="h-2 rounded-full bg-primary-700" style={{ width: `${charProgress}%` }} />
        </div>

        <div className="flex items-center gap-3">
          <button disabled={loading} className="px-5 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white">
            {loading ? "Submitting..." : "Submit securely"}
          </button>

          <div className="text-sm text-gray-500">Only aggregated stats are public.</div>
        </div>

        {/* Local preview */}
        {body && (
          <div className="mt-6 p-4 rounded-lg bg-white/60 dark:bg-gray-900/50">
            <h4 className="font-semibold">{title || "Preview title"}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">{body}</p>
          </div>
        )}
      </form>
    </motion.div>
  );
}
