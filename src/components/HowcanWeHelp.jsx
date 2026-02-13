import React from "react";
import { FaCode, FaPalette, FaMobileAlt } from "react-icons/fa";

function HowcanWeHelp() {
  const services = [
    {
      icon: <FaCode size={28} />,
      title: "Web Development",
      description:
        "Building fast, scalable and responsive websites tailored to your business goals.",
    },
    {
      icon: <FaPalette size={28} />,
      title: "UI/UX Design",
      description:
        "Designing clean, intuitive and engaging digital experiences users love.",
    },
    {
      icon: <FaMobileAlt size={28} />,
      title: "App Development",
      description:
        "Creating powerful mobile applications with smooth performance and modern design.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white dark:bg-black text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          How Can We Help?
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-14">
          We provide high-quality digital solutions to turn your ideas into
          impactful experiences.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-white/5
              hover:shadow-xl hover:-translate-y-2
              transition-all duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="mb-5 text-indigo-600 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover underline */}
              <div className="mt-6 h-1 w-0 bg-indigo-600 group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowcanWeHelp;
