import React, { useState, useEffect } from "react";

const texts = [
  "Custom AI chatbots from your data",
  "Automate 90% of support queries",
  "Easy website integration",
  "Supports 80+ languages",
  "Instant 24/7 support",
  "  Automate RFP handling",
  "Scalable AI automations",
  "Boost engagement, reduce churn",
];

const FeaturesBar: React.FC = () => {
  const [visibleCount] = useState(texts.length); // Default for medium screens

  // Adjust visibleCount based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      //   if (window.innerWidth > 1200) setVisibleCount(5);
      //   else if (window.innerWidth > 768) setVisibleCount(4);
      //   else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div className="overflow-hidden bg-gray-100 text-gray-600 text-lg relative py-4 w-[100vw]">
      {/* Outer container with continuous scroll effect */}
      <div
        className="flex"
        style={{
          width: "200%", // Allow continuous scroll effect
          animation: "scrollLeft 60s linear infinite", // Seamless continuous scrolling
        }}
      >
        {/* Duplicated content for a smooth looping effect */}
        {[...texts, ...texts].map((text, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              flexBasis: `${100 / visibleCount}%`,
              //   marginLeft: "-40px",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* CSS for the infinite looping scroll effect */}
      <style>
        {`
          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
        body {
            overflow-x: hidden; /* Prevent horizontal scroll */
          }

        `}
      </style>
    </div>
  );
};

export default FeaturesBar;
