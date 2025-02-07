// const ScrollingBanner = () => {
//   const texts = [
//     "Custom AI chatbots from your data",
//     "Automate 90% of support queries",
//     "Easy website integration",
//     "Supports 80+ languages",
//     "Instant 24/7 support",
//     "Automate RFP handling",
//     "Scalable AI automations",
//     "Boost engagement, reduce churn",
//   ];

//   // Join texts with spacing
//   const displayText = texts.join(" • ");

//   return (
//     <div className="w-full bg-gray-100 overflow-hidden">
//       <div className="relative flex whitespace-nowrap">
//         {/* First copy of the text */}
//         <div className="animate-marquee inline-block pr-8">{displayText}</div>
//         {/* Duplicate copy for seamless loop */}
//         <div className="animate-marquee inline-block pr-8">{displayText}</div>
//       </div>
//     </div>
//   );
// };

// // Add required keyframes animation to the document
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes marquee {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }

//   .animate-marquee {
//     animation: marquee 30s linear infinite;
//   }
// `;
// document.head.appendChild(style);

// export default ScrollingBanner;

//BELOW IS FOR SWITCHING TEXT

// import React, { useState, useEffect } from "react";

// const ScrollingBanner = () => {
//   const texts = [
//     "Custom AI chatbots from your data",
//     "Automate 90% of support queries",
//     "Easy website integration",
//     "Supports 80+ languages",
//     "Instant 24/7 support",
//     "Automate RFP handling",
//     "Scalable AI automations",
//     "Boost engagement, reduce churn",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 3000); // Change text every 3 seconds

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="w-full bg-gray-100 overflow-hidden">
//       <div className="relative h-12">
//         {texts.map((text, index) => (
//           <div
//             key={index}
//             className={`absolute w-full transform transition-transform duration-500 ease-in-out ${
//               index === currentIndex
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-full opacity-0"
//             }`}
//           >
//             <div className="flex items-center justify-start h-12 px-4">
//               <span className="text-lg font-medium text-gray-800">{text}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollingBanner;

// import React from "react";

// const ScrollingBanner = () => {
//   const texts = [
//     "Custom AI chatbots from your data",
//     "Automate 90% of support queries",
//     "Easy website integration",
//     "Supports 80+ languages",
//     "Instant 24/7 support",
//     "Automate RFP handling",
//     "Scalable AI automations",
//     "Boost engagement, reduce churn",
//   ];

//   return (
//     <div className="w-full bg-gray-100 h-12 relative overflow-hidden">
//       <div className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap animate-marquee">
//         {texts.map((text, index) => (
//           <span key={index} className="pr-8 inline-block">
//             {text}
//           </span>
//         ))}
//         {texts.map((text, index) => (
//           <span key={`dup-${index}`} className="pr-8 inline-block">
//             {text}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Add required keyframes animation to the document
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes marquee {
//     0% {
//       transform: translateX(100%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }

//   .animate-marquee {
//     animation: marquee 90s linear infinite;
//   }
// `;
// document.head.appendChild(style);

// export default ScrollingBanner;

// const ScrollingBanner = () => {
//   const texts = [
//     "Custom AI chatbots from your data",
//     "Automate 90% of support queries",
//     "Easy website integration",
//     "Supports 80+ languages",
//     "Instant 24/7 support",
//     "Automate RFP handling",
//     "Scalable AI automations",
//     "Boost engagement, reduce churn",
//   ];

//   return (
//     <div className="w-full bg-gray-100 text-gray-500 h-12 relative overflow-hidden">
//       <div
//         className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap animate-marquee"
//         style={{ transform: "translateX(0)" }}
//       >
//         {texts.map((text, index) => (
//           <span key={index} className="pr-8 inline-block">
//             {text}
//           </span>
//         ))}
//         {texts.map((text, index) => (
//           <span key={`dup-${index}`} className="pr-8 inline-block">
//             {text}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Add required keyframes animation to the document
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes marquee {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%);
//     }
//   }

//   .animate-marquee {
//     animation: marquee 30s linear infinite;
//   }
// `;
// document.head.appendChild(style);

// export default ScrollingBanner;

const ScrollingBanner = () => {
  const texts = [
    "Custom AI chatbots from your data",
    "Automate 90% of support queries",
    "Easy website integration",
    "Supports 80+ languages",
    "Instant 24/7 support",
    "Automate RFP handling",
    "Scalable AI automations",
    "Boost engagement, reduce churn",
  ];

  return (
    <div className="w-full bg-gray-300 h-12 text-gray-500 relative overflow-hidden">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-300 to-transparent z-10"></div>

      {/* Scrolling content */}
      <div
        className="absolute top-0 left-0 h-full flex items-center whitespace-nowrap animate-marquee"
        style={{ transform: "translateX(0)" }}
      >
        {texts.map((text, index) => (
          <span key={index} className="pr-8 inline-block">
            {text}
          </span>
        ))}
        {texts.map((text, index) => (
          <span key={`dup-${index}`} className="pr-8 inline-block">
            {text}
          </span>
        ))}
      </div>

      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-300 to-transparent z-10"></div>
    </div>
  );
};

// Add required keyframes animation to the document
const style = document.createElement("style");
style.textContent = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 30s linear infinite;
  }
`;
document.head.appendChild(style);

export default ScrollingBanner;
