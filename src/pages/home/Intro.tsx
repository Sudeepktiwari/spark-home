// import img1 from "../../assets/sparkagentai-1.webp";
import { Button } from "@/components/ui/button";
// import Lottie from "lottie-react";
import { Star } from "lucide-react";
// import introAnim from "../../assets/NewImages/Final-videos/Desktop-hero-head-final.json";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

const StarRating = () => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="w-6 h-6 text-orange-400 fill-orange-400" />
      ))}
    </div>
  );
};
const phrases = [
  "empower your team",
  "enhance customer experience",
  "win more RFPs",
];

// to-[#fffde7]
const Intro = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const showDuration = 1000; // 1 sec visible
    const fadeDuration = 800; // 0.8 sec fade out

    const showTimeout = setTimeout(() => {
      setIsVisible(false);
    }, showDuration);

    const switchTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
      setIsVisible(true);
    }, showDuration + fadeDuration);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(switchTimeout);
    };
  }, [index]);

  return (
    <div>
      <div
        style={
          {
            // backgroundImage: `url(${imglightbg})`,
          }
        }
        // bg-[size:60%_50%]
        className="lg:gap-6 lg:pt-8 items-center bg-black shadow-2xl"
      >
        <div className="">
          <p
            className=" text-center text-white text-2xl lg:text-[74px] font-bold leading-normal
          pt-8 min-h-40"
          >
            <span className="text-[35px] lg:text-[74px] leading-[1.2] font-bold text-white tracking-wide">
              AI agents to{" "}
              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.span
                    key={phrases[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }} // Fade in/out in 0.8 sec
                    className="block bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent"
                  >
                    {phrases[index]}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </p>
          <p
            className="text-sm text-center text-white px-8 pb-8 pt-6 lg:text-[16px] leading-loose 
          2xl:text-xl font-light"
          >
            The AI Chatbot You Can{" "}
            <span className="font-semibold underline underline-offset-4 text-orange-500">
              Set Up in 1 Minute
            </span>
            —Easier and Faster Than Any Other!
          </p>
        </div>
        <div className=" gap-2 lg:gap-8 items-center justify-center flex px-6 lg:py-8 lg:px-8 ">
          <Button
            className=" bg-[#5555ff] hover:bg-white hover:text-black text-[24px] 
            lg:w-[16vw] rounded-md lg:py-8 py-6 px-2 "
          >
            Sign Up Now
          </Button>
          <div className="flex flex-col items-center text-center text-white ">
            <StarRating />
            <p>Based on 10,000+ reviews</p>
          </div>
        </div>
        <div className="py-10 justify-center flex">
          <Skeleton className="w-[90vw] lg:w-[90vw] h-[30vh] lg:h-[90vh] bg-gray-700" />
        </div>
        {/* <div className="lg:w-[98vw] lg:h-[100vh]">
          <Lottie
            autoplay
            loop
            animationData={introAnim}
            className="lg:w-[98vw] lg:h-[100vh] w-[90vw] h-[30vh] pt-5"
          />
        </div> */}

        {/* <div
        className="hidden w-[90vw] h-[90vh]
        object-cover"
        >
        <img src={imglightbg} alt="Background" />
        </div> */}
      </div>
      <div className="lg:flex items-center py-10 bg-gray-300 ">
        <p className="flex items-center text-sm lg:text-lg text-center px-4 lg:px-20 text-gray-500 ">
          Quickly Build Smart AI Chatbots to Scale Your Support and Boost Sales.
          SparkAgentAI automates interactions for customer support, lead
          qualification, and more—delivering instant value from day one.
        </p>
        {/* <div className=" justify-center gap-4 items-center flex pt-10 lg:pt-0 lg:w-[50vw]">
          <Button className=" bg-[#5555ff] hover:bg-white hover:text-black lg:w-[20vw] ">
            Sign Up Free
          </Button>
          <div className="flex flex-col items-center text-center text-white">
            <StarRating />
            <p>Based on 10,000+ reviews</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
