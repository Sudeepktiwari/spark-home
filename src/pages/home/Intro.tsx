// import img1 from "../../assets/sparkagentai-1.webp";
import { Button } from "@/components/ui/button";
// import Lottie from "lottie-react";
import { Star } from "lucide-react";
// import introAnim from "../../assets/NewImages/Final-videos/Desktop-hero-head-final.json";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  "enhance Customer Experience",
  "win more RFPs",
];

// to-[#fffde7]
const Intro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        style={
          {
            // backgroundImage: `url(${imglightbg})`,
          }
        }
        // bg-[size:60%_50%]
        className="
      lg:bg-[size:98%_130%] bg-[size:100%_80%] bg-no-repeat bg-right-bottom lg:bg-center
      lg:gap-6 lg:pt-8 items-center bg-black shadow-2xl"
      >
        <div className="">
          <p
            className=" text-center text-white text-2xl lg:text-[74px] font-bold leading-normal
          pt-8"
          >
            <span className="text-[74px] leading-[1.2] font-bold text-white text-center tracking-wide">
              AI agents to{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="block bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent"
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </p>
          <p
            className="text-xs text-center text-white py-8 lg:text-[16px] leading-loose 
          2xl:text-xl font-light"
          >
            The AI Chatbot You Can{" "}
            <span className="font-semibold underline underline-offset-4 text-orange-500">
              Set Up in 1 Minute
            </span>
            —Easier and Faster Than Any Other!
          </p>
        </div>
        <div className=" gap-8 items-center justify-center hidden lg:flex pt-4">
          <Button
            className=" bg-[#5555ff] hover:bg-white hover:text-black text-[24px] 
            lg:w-[16vw] rounded-full py-8 "
          >
            Sign Up Now
          </Button>
          <div className="flex flex-col items-center text-center text-white ">
            <StarRating />
            <p>Based on 10,000+ reviews</p>
          </div>
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
      <div className="lg:flex items-center py-10 bg-black">
        <p className="flex items-center text-lg text-justify lg:text-center px-4 lg:px-20 text-white ">
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
