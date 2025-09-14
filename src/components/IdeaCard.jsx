import React from "react";
import { motion } from "framer-motion";

export default function IdeaCard({ idea, onOpen }) {
  // idea: { id, title, summary, tags, createdAt, privacy }
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      className="relative idea-card perspective"
      style={{ perspective: 1000 }}
    >
      <div className="relative">
        {/* front */}
        <div className="idea-front glass p-5 rounded-2xl shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-lg">{idea.title}</h4>
              <div className="text-sm text-gray-500 mt-1">{idea.summary.slice(0, 120)}{idea.summary.length>120? "..." : ""}</div>
            </div>
            <div className="text-xs px-2 py-1 rounded-md bg-indigo-50 text-indigo-700">{idea.privacy}</div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {idea.tags?.slice(0,3).map((t,i)=>(
                <span key={i} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700">{t}</span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => onOpen(idea)} className="text-sm px-3 py-1 rounded-md bg-gradient-to-r from-primary-500 to-primary-700 text-white">Open</button>
            </div>
          </div>
        </div>

        {/* back (for future content or quick stats) */}
        <div className="idea-back glass p-5 rounded-2xl shadow-lg flex items-center justify-center" style={{ transform: "rotateY(180deg)" }}>
          <div className="text-center">
            <div className="text-sm font-medium">Submitted</div>
            <div className="text-lg font-bold">{new Date(idea.createdAt).toLocaleDateString()}</div>
            <div className="text-xs text-gray-500 mt-2">Privacy: {idea.privacy}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
