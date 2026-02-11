import React from "react";

function TrustedBy() {
  const logos = [
    "/microsoft_logo.png",
    "/zoom_logo.png",
    "/rakuten_logo.png",
    "/coinbase_logo.png",
    "/airbnb_logo.svg",
    "/google_logo.svg",
  ];

  return (
    <section className="w-full bg-gray-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-10">
          Trusted by Leading Companies
        </h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-scroll whitespace-nowrap">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="company logo"
                className="h-8 sm:h-10 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
