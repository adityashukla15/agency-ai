import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* Grid Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Agency-Ai
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Turning imagination into digital impact. We build modern digital
              experiences that help businesses grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Services</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">About</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-600 transition">Web Development</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">App Development</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Branding</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white dark:bg-white/10 
              hover:bg-indigo-600 hover:text-white transition">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white dark:bg-white/10 
              hover:bg-indigo-600 hover:text-white transition">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white dark:bg-white/10 
              hover:bg-indigo-600 hover:text-white transition">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white dark:bg-white/10 
              hover:bg-indigo-600 hover:text-white transition">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-white/10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} agency-ai. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
