import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Help from "./components/Help"
import ReachToUsLogin from "./components/ReachToUsLogin";
import CreateAccount from "./components/CreateAccount";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="bg-white dark:bg-[#0b0f1a] min-h-screen transition-colors duration-300">
        
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustedBy />
                <Help />

                {/* Reach Us Section on Homepage */}
                <section className="py-20 px-6">
                 <div className="text-center mb-16">
  <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
    Reach Us
  </h2>
  <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
</div>
                  <ReachToUsLogin />
                </section>
              </>
            }
          />

          {/* SERVICES */}
          <Route path="/services" element={<Help/>} />

          {/* CONTACT PAGE */}
          <Route path="/contact-us" element={<ReachToUsLogin />} />

          {/* CREATE ACCOUNT */}
          <Route path="/create-account" element={<CreateAccount />} />

          {/* OUR WORK */}
          <Route path="/our-work" element={<TrustedBy />} />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
};

export default App;
