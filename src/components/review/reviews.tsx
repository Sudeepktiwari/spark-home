import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const reviews = [
  {
    quote: "Reduces support times 70% and boosts resolution.",
    description:
      "Instant document access powers faster customer support and improved outcomes.",
    name: "Mike",
    designation: "Entrepreneur  ",
    image:
      "https://www.sparkagentai.com/_astro/Mike_cloudnine.e7a10897_Z6WWNs.webp",
  },
  {
    quote:
      "Skyrockets productivity and makes tasks more manageable and enjoyable.",
    description:
      "Seamless organization makes work easier, more enjoyable, and highly efficient.",
    name: "Emily",
    designation: "HR Manager",
    image:
      "https://www.sparkagentai.com/_astro/headshot_placeholder.245d4076_BSzor.webp",
  },
  {
    quote:
      "Integration transformed our support system, boosting response times 250% and satisfaction by 40%.",
    description:
      "Smooth integration; AI chatbots now essential to our business operations.",
    name: "Yajuvendra Singh",
    designation: "Chief Support Officer at Appointy",
    image:
      "https://www.sparkagentai.com/_astro/yaju_singh_appointy.9560b589_Z1heGwb.webp",
  },
  {
    quote:
      "Revolutionizes our sales process: proposals 60% faster, win rate up 35%.",
    description:
      "AI-driven RFPs streamline sales, cutting proposal time and increasing success, now expanding company-wide.",
    name: "Manish Gupta",
    designation: "COO at Casefox",
    image:
      "https://www.sparkagentai.com/_astro/manish_gupta_casefox.9e749885_Z21pWTT.webp",
  },
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div
      className="flex items-center justify-center bg-gradient-to-b
     from-pink-50 to-purple-100 mt-10 h-[90vh] "
    >
      <div className="review-block relative max-w-[80vw] lg:w-full p-6 bg-white h-[60vh] lg:h-[60vh] shadow-lg rounded-xl">
        <div className="flex justify-end gap-2 z-30">
          <button
            onClick={prevReview}
            className="p-2 bg-gray-100 shadow hover:bg-gray-200"
          >
            ←
          </button>

          <button
            onClick={nextReview}
            className="p-2 bg-gray-100 shadow hover:bg-gray-200 "
          >
            →
          </button>
        </div>
        <div
          className="hidden lg:block text-[299px] text-purple-200 
        relative bottom-[150px] right-[18px] pointer-events-none"
        >
          “
        </div>
        <div className="lg:relative lg:bottom-[390px] lg:left-[10px] pt-4 lg:pt-0">
          <h2
            className="text-[22px] lg:text-[48px] leading-tight mb-1 font-bold bg-gradient-to-br from-purple-800
          to-blue-500 bg-clip-text text-transparent"
          >
            {reviews[currentIndex].quote}
          </h2>
          <p className="text-[14px] lg:text-[32px] mt-2 text-gray-700">
            {reviews[currentIndex].description}
          </p>
        </div>

        <p className=" absolute bottom-4 lg:ml-2 font-semibold text-gray-900 flex gap-4 items-center">
          <Avatar className="w-[60px] h-[60px]">
            <AvatarImage src={reviews[currentIndex].image} />
            <AvatarFallback>img</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p>{reviews[currentIndex].name}</p>
            <p>{reviews[currentIndex].designation}</p>
          </div>
        </p>
      </div>
    </div>
  );
}
