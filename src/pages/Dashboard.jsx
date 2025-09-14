import React, { useState } from "react";
import { motion } from "framer-motion";
import IdeaCard from "../components/IdeaCard.jsx";
import IdeaModal from "../components/IdeaModal.jsx";
import { Activity, ClipboardList, Bell } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

export default function Dashboard() {
  // mock ideas data (in real app this will come from backend)
  const [ideas] = useState([
    { id: 1, title: "Auto-matching cofounders", summary: "A platform that auto-matches startup cofounders based on skills, timezone and working habits", tags: ["matching","cofounder","AI"], createdAt: Date.now()-1000*60*60*24*2, privacy: "Private" },
    { id: 2, title: "On-demand prototyping", summary: "A service that turns product descriptions into clickable prototypes in minutes", tags: ["prototype","saas"], createdAt: Date.now()-1000*60*60*24*10, privacy: "Private" },
    { id: 3, title: "Local supply chain optimizer", summary: "Optimization engine for local suppliers reducing delivery times by dynamic routing", tags: ["logistics","supply"], createdAt: Date.now()-1000*60*60*24*30, privacy: "Private" },
  ]);

  const [selectedIdea, setSelectedIdea] = useState(null);

  const analyticsData = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 800 },
    { month: "Mar", users: 600 },
    { month: "Apr", users: 1200 },
    { month: "May", users: 900 },
    { month: "Jun", users: 1500 },
  ];

  const taskData = [
    { name: "Founders", tasks: 20 },
    { name: "Builders", tasks: 35 },
    { name: "Mentors", tasks: 15 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
        <div className="text-sm text-gray-500">Private • Secure • Interactive</div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ y: -4 }} className="glass p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3"><Activity className="text-primary-700"/> <div><div className="text-sm text-gray-500">Your Ideas</div><div className="text-2xl font-bold text-primary-700">5</div></div></div>
          <div className="mt-3 text-sm text-gray-500">Submit more ideas to climb the leaderboard.</div>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="glass p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3"><ClipboardList className="text-green-500"/><div><div className="text-sm text-gray-500">Global Ideas</div><div className="text-2xl font-bold text-green-600">1,245</div></div></div>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="glass p-6 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3"><Bell className="text-yellow-500"/><div><div className="text-sm text-gray-500">Rank</div><div className="text-2xl font-bold text-purple-600">Top 12%</div></div></div>
        </motion.div>
      </div>

      {/* Charts & Idea Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div className="glass p-6 rounded-2xl shadow-xl" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h3 className="font-semibold mb-3">User Growth</h3>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div className="glass p-6 rounded-2xl shadow-xl" initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <h3 className="font-semibold mb-4">Your ideas feed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ideas.map(idea => (
                <IdeaCard key={idea.id} idea={idea} onOpen={setSelectedIdea} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div className="glass p-6 rounded-2xl shadow-xl" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h3 className="font-semibold mb-3">Tasks by role</h3>
            <div style={{ width: "100%", height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskData}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tasks" fill="#10b981" radius={[6,6,0,0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div className="glass p-6 rounded-2xl shadow-xl">
            <h3 className="font-semibold mb-3">Recent activity</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>✅ Idea submitted (you) — 2m ago</li>
              <li>🎉 Global milestone reached — 1h ago</li>
              <li>⚙️ Feature deployed — 3h ago</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Idea Modal */}
      <IdeaModal idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
    </div>
  );
}

