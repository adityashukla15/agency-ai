import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl 
      border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center text-white mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Join us and start building amazing experiences
        </p>

        {/* Form */}
        <form className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
              text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
              text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
              text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="mt-1 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
              text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 
            text-white font-medium hover:opacity-90 transition"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              to="/contact-us"
              className="text-indigo-400 hover:underline"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
