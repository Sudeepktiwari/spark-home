import img1 from "../../assets/sparkagentai-1.webp";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const StarRating = () => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="w-6 h-6 text-orange-400 fill-orange-400" />
      ))}
    </div>
  );
};

// to-[#fffde7]
const Intro = () => {
  return (
    <div
      className="lg:flex lg:items-center lg:justify-between px-4 pt-0 lg:pt-12 pb-20 bg-transparent
     "
    >
      <div
        className="lg:m-8 lg:mr-14 mx-1 space-y-4 w-full lg:w-1/2"
        style={{ fontWeight: 300 }}
      >
        <p className=" text-center lg:text-start text-2xl lg:text-[2rem] 2xl:text-[2.5rem] leading-tight pt-10 lg:pt-0">
          Empower Your Team{" "}
          <span className="text-sm block lg:inline lg:text-[2rem] 2xl:text-[2.5rem]">
            with an AI Agent for Exceptional{" "}
            <span className="inline">Customer Experience</span>
          </span>
        </p>
        <p className="text-xs text-center py-4 lg:py-0 lg:text-start lg:text-sm 2xl:text-xl ">
          The AI Chatbot You Can{" "}
          <span className="text-orange-500">Set Up in 1 Minute</span>—Easier and
          Faster Than Any Other!
        </p>
        <p
          className="text-justify hidden lg:block text-sm pt-0 lg:pt-5 2xl:text-lg"
          style={{ lineHeight: "22px" }}
        >
          Quickly Build Smart AI Chatbots to Scale Your Support and Boost Sales.
          SparkAgentAI automates interactions for customer support, lead
          qualification, and more—delivering instant value from day one.
        </p>
        <div className="lg:flex items-center gap-2 justify-around hidden  pt-0 lg:pt-5 ">
          <Button className="w-[50%] bg-[#5555ff] hover:bg-white hover:text-black p-5 ">
            Sign Up Free
          </Button>
          <div className="flex flex-col items-center text-center">
            <StarRating />
            <p>Based on 10,000+ reviews</p>
          </div>
        </div>
      </div>
      <div className="m-2">
        <img src={img1} alt="Main" className="lg:h-[70vh] lg:w-[90vw]" />
      </div>
      <p className="text-justify block lg:hidden mx-2">
        Quickly Build Smart AI Chatbots to Scale Your Support and Boost Sales.
        SparkAgentAI automates interactions for customer support, lead
        qualification, and more—delivering instant value from day one.
      </p>
      <div className="flex items-center gap-0 justify-around lg:hidden my-4">
        <Button className="w-[40%] bg-[#5555ff] hover:bg-white hover:text-black">
          Sign Up Free
        </Button>
        <div className="flex flex-col items-center text-center">
          <StarRating />
          <p>Based on 10,000+ reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
