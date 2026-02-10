import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center
      px-4 sm:px-10 lg:px-24 xl:px-40 py-20
      text-gray-700 dark:text-white overflow-hidden"
    >
      {/* 🔹 Background Gradient / Blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl dark:bg-blue-500/10"></div>
      <div className="absolute top-40 -left-32 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl dark:bg-purple-500/10"></div>

      {/* 🔹 Trusted Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 border border-gray-300 dark:border-white/20 
      p-1.5 pr-4 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur">
        <img className="w-20" src="/group_profile.png" alt="Users" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      {/* 🔹 Heading */}
      <h1 className="relative z-10 mt-6 text-4xl sm:text-5xl md:text-6xl xl:text-[84px] 
      font-medium xl:leading-[95px] max-w-5xl">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </h1>

      {/* 🔹 Subtitle */}
      <p className="relative z-10 mt-4 text-sm sm:text-lg font-medium text-gray-500 dark:text-white/70 
      max-w-xl">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      {/* 🔹 Hero Image */}
      <div className="relative z-10 mt-12 w-full flex justify-center">
        <img
          src="/hero_img.png"
          alt="Hero Illustration"
          className="w-full max-w-6xl object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
