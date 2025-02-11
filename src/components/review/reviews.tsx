import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const reviews = [
  {
    quote:
      "Future of RFP/RFI/security questionnaire responses! Saves our team a ton of time.",
    description:
      "Lot of great features. User experience is extremely intuitive and the team is very responsive.",
    name: "Ben H",
    designation: "(Head of Solutions)",
    image: "https://github.com/shadcn.png",
  },
  {
    quote: "Amazing platform for handling business proposals efficiently!",
    description:
      "The automation features save us a lot of time, and the UI is smooth and easy to navigate.",
    name: "Sarah M",
    designation: "(Project Manager)",
    image: "https://github.com/shadcn.png",
  },
  {
    quote: "A must-have tool for security compliance!",
    description:
      "It simplifies compliance tasks and helps us stay on track with minimal effort.",
    name: "John D",
    designation: "(Security Analyst)",
    image: "https://github.com/shadcn.png",
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
        <div className="flex justify-end gap-2">
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
        relative bottom-[150px] right-[18px]"
        >
          “
        </div>
        <div className="lg:relative lg:bottom-[390px] lg:left-[10px] pt-4 lg:pt-0">
          <h2
            className="text-[28px] lg:text-[48px] leading-tight mb-1 font-bold bg-gradient-to-br from-purple-800
          to-blue-500 bg-clip-text text-transparent"
          >
            {reviews[currentIndex].quote}
          </h2>
          <p className="text-[18px] lg:text-[32px] mt-2 text-gray-700">
            {reviews[currentIndex].description}
          </p>
        </div>

        <p className=" absolute bottom-6 ml-2 font-semibold text-gray-900 align-bottom flex gap-4 items-center">
          <Avatar className="w-[60px] h-[60px]">
            <AvatarImage src={reviews[currentIndex].image} />
            <AvatarFallback>CN</AvatarFallback>
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
