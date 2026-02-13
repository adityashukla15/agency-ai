import React from "react";
import { Link } from "react-router-dom";


function ReachToUsLogin() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white dark:bg-white/5 backdrop-blur-xl 
      border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-2 text-gray-800 dark:text-white">
          Reach To Us
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Login to connect with our team
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 
              dark:border-white/20 bg-gray-50 dark:bg-white/10 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 
              transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-300 
              dark:border-white/20 bg-gray-50 dark:bg-white/10 
              focus:outline-none focus:ring-2 focus:ring-indigo-500 
              transition-all"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 
            text-white font-medium hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Extra Links */}
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
            <Link to="#" className="hover:text-indigo-600 transition">
              Forgot Password?
            </Link>

            {/* 🔥 Routed to Create Account */}
            <Link 
              to="/create-account" 
              className="hover:text-indigo-600 transition"
            >
              Create Account
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
}

export default ReachToUsLogin;
