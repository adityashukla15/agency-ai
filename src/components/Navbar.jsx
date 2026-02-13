import React, { useState } from "react"
import { Link } from "react-router-dom"
import ThemeToggleBtn from "./ThemeButton"

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <div
        className="
          flex justify-between items-center
          px-4 sm:px-12 lg:px-24 xl:px-40 py-4
          sticky top-0 z-30 font-medium
          transition-colors duration-300
          bg-white dark:bg-gray-900
        "
      >
        {/* LOGO */}
        <Link to="/">
          <img
            src={theme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
            alt="Logo"
            className="w-28 sm:w-36 cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-white text-sm">
          <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
          <Link to="/services" className="hover:text-indigo-500 transition">Services</Link>
          <Link to="/our-work" className="hover:text-indigo-500 transition">Our Work</Link>
          <Link to="/contact-us" className="hover:text-indigo-500 transition">Contact Us</Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* MENU ICON (Mobile Only) */}
          <img
            src={theme === "dark" ? "/menu_icon_dark.svg" : "/menu_icon.svg"}
            alt="Menu"
            className="w-7 cursor-pointer md:hidden"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50
        bg-white dark:bg-gray-900 shadow-2xl
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b dark:border-gray-700">
          <span className="text-lg font-semibold dark:text-white">Menu</span>
          <img
            src="/close_icon.svg"
            alt="Close"
            className="w-6 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 py-8 text-gray-700 dark:text-white text-base">

          <Link to="/" onClick={() => setSidebarOpen(false)} className="hover:text-indigo-500 transition">
            Home
          </Link>

          <Link to="/services" onClick={() => setSidebarOpen(false)} className="hover:text-indigo-500 transition">
            Services
          </Link>

          <Link to="/our-work" onClick={() => setSidebarOpen(false)} className="hover:text-indigo-500 transition">
            Our Work
          </Link>

          <Link to="/contact-us" onClick={() => setSidebarOpen(false)} className="hover:text-indigo-500 transition">
            Contact Us
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar
