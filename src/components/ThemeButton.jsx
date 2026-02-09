import React, { useEffect } from "react"

const ThemeToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border border-gray-500 rounded-full"
    >
      <img
        src={theme === "dark" ? "/sun_icon.svg" : "/moon_icon.svg"}
        className="w-6 h-6"
        alt="theme"
      />
    </button>
  )
}

export default ThemeToggleBtn
