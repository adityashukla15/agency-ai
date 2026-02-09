import React, { useState } from "react"
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
        <img
          src={theme === "dark" ? "/logo_dark.svg" : "/logo.svg"}
          alt="Logo"
          className="w-28 sm:w-36 cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-white text-sm">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/our-work">Our Work</a>
          <a href="/contact-us">Contact Us</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

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
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          sidebarOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50
        bg-white dark:bg-gray-900
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b dark:border-gray-700">
          <span className="text-lg font-semibold dark:text-white">Menu</span>
          <img
            src="/close_icon.svg"
            alt="Close"
            className="w-6 cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      </div>
    </>
  )
}

export default Navbar
