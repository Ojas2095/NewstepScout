import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ---------------- Reusable Components ---------------- */

function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-6 py-2 rounded-lg shadow transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Input({ className, ...props }) {
  return (
    <input
      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
      {...props}
    />
  );
}

/* ---------------- Navbar + Footer ---------------- */

function Navbar() {
  const location = useLocation();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/submit", label: "Submit Idea" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
  ];

  return (
    <nav className="glass shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        NewstepScout
      </h1>
      <div className="space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-green-500 ${
              location.pathname === link.path
                ? "text-green-500 font-semibold"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="glass text-center p-4 mt-8 text-sm text-gray-600 dark:text-gray-300">
      © {new Date().getFullYear()} NewstepScout. All rights reserved.
    </footer>
  );
}

/* ---------------- Pages ---------------- */

// ✅ Home Page
// ✅ Home Page (with both buttons)
function Home() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to NewstepScout 🚀
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-6">
          Share your startup ideas securely. Keep them private or share with the
          world, and track your journey alongside other innovators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="btn-primary px-6 py-3 rounded-lg shadow hover:opacity-90"
          >
            Get Started
          </Link>
          <Link
            to="/submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600"
          >
            Submit Your Idea
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
          Why use NewstepScout?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-bold mb-2 text-green-600">🔒 Secure</h4>
            <p>Your ideas are encrypted and private until you decide to share.</p>
          </div>
          <div className="glass p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-bold mb-2 text-blue-600">🌍 Global</h4>
            <p>See what innovators worldwide are building and get inspired.</p>
          </div>
          <div className="glass p-6 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-bold mb-2 text-purple-600">📊 Track</h4>
            <p>Monitor your submissions and track your growth over time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


// ✅ Submit Idea Page
function SubmitIdea() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setLoading(false);
      if (idea.length > 5) {
        setMessage("✅ Your idea has been submitted securely!");
        setIdea("");
      } else {
        setMessage("❌ Idea must be at least 6 characters long.");
      }
    }, 1500);
  };

  return (
    <div className="pt-24 flex flex-col items-center px-6">
      <h2 className="text-3xl font-semibold mb-6">Submit Your Idea 💡</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg w-full max-w-md"
      >
        <textarea
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Describe your startup idea..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="bg-green-500 text-white hover:bg-green-600 w-full"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
      {message && (
        <p
          className={`mt-4 font-medium ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

// ✅ Dashboard Page (updated with chart + recent ideas)
function Dashboard() {
  const chartData = [
    { month: "Jan", ideas: 3 },
    { month: "Feb", ideas: 5 },
    { month: "Mar", ideas: 8 },
    { month: "Apr", ideas: 12 },
    { month: "May", ideas: 15 },
  ];

  const recentIdeas = [
    "AI-powered fitness coach",
    "Green energy marketplace",
    "Blockchain for education",
    "Personal finance AI",
  ];

  return (
    <div className="pt-24 px-6">
      <h2 className="text-3xl font-semibold mb-6">📊 Your Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass p-6 text-center rounded-lg shadow">
          <h3 className="text-xl font-semibold">Your Submissions</h3>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>
        <div className="glass p-6 text-center rounded-lg shadow">
          <h3 className="text-xl font-semibold">Global Ideas</h3>
          <p className="text-2xl font-bold text-blue-600">132</p>
        </div>
        <div className="glass p-6 text-center rounded-lg shadow">
          <h3 className="text-xl font-semibold">Rank</h3>
          <p className="text-2xl font-bold text-purple-600">Top 10%</p>
        </div>
      </div>

      {/* Chart */}
      <div className="glass p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Your Idea Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="ideas"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Ideas */}
      <div className="glass p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Submissions</h3>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          {recentIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ✅ Login Page
function Login() {
  return (
    <div className="pt-24 flex flex-col items-center px-6">
      <h2 className="text-3xl font-semibold mb-6">Login 🔐</h2>
      <form className="glass shadow-lg p-6 rounded-lg w-full max-w-md">
        <Input type="email" placeholder="Email" className="mb-4" required />
        <Input type="password" placeholder="Password" className="mb-4" required />
        <Button className="bg-green-500 text-white hover:bg-green-600 w-full">
          Login
        </Button>
      </form>
      <p className="mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-green-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}

// ✅ Register Page
function Register() {
  return (
    <div className="pt-24 flex flex-col items-center px-6">
      <h2 className="text-3xl font-semibold mb-6">Register 📝</h2>
      <form className="glass shadow-lg p-6 rounded-lg w-full max-w-md">
        <Input type="text" placeholder="Full Name" className="mb-4" required />
        <Input type="email" placeholder="Email" className="mb-4" required />
        <Input type="password" placeholder="Password" className="mb-4" required />
        <Button className="bg-green-500 text-white hover:bg-green-600 w-full">
          Register
        </Button>
      </form>
      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-green-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}

/* ---------------- Layout + App ---------------- */

function Layout() {
  return (
    <div className="min-h-screen flex flex-col hero-bg">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitIdea />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}
