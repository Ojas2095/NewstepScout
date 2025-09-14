import React from "react";
import { motion } from "framer-motion";

export default function IdeaModal({ idea, onClose }) {
  if (!idea) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative z-10 w-full max-w-2xl glass rounded-2xl p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">{idea.title}</h3>
            <div className="text-sm text-gray-500 mt-1">Submitted: {new Date(idea.createdAt).toLocaleString()}</div>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">Close</button>
        </div>

        <div className="mt-4 text-gray-700 dark:text-gray-200">
          <p>{idea.summary}</p>
        </div>

        <div className="mt-4 flex gap-2 flex-wrap">
          {idea.tags?.map((t,i)=> <span key={i} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800">{t}</span>)}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">Privacy: <span className="font-medium">{idea.privacy}</span></div>
          <div>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-primary-500 to-primary-700 text-white" onClick={onClose}>Close</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
