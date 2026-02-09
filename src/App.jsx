import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
    </>
  )
}

export default App
