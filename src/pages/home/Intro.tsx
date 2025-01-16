import { Card } from "@/components/ui/card";
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

const Intro = () => {
  return (
    <div>
      <Card className="lg:flex lg:justify-between font-sans">
        <div className="lg:m-2 mx-1 space-y-4 w-full lg:w-1/2">
          <p className=" text-center lg:text-start text-2xl lg:text-3xl font-bold">
            Empower Your Team <br />
            <span className="text-sm lg:text-2xl">
              with an AI Agent for Exceptional
              <span className="inline lg:block ml-1 lg:ml-0">
                Customer Experience
              </span>
            </span>
          </p>
          <p className="text-xs text-center lg:text-start lg:text-lg ">
            The AI Chatbot You Can{" "}
            <span className="text-orange-500">Set Up in 1 Minute</span>—Easier
            and Faster Than Any Other!
          </p>
          <p className="text-justify hidden lg:block ">
            Quickly Build Smart AI Chatbots to Scale Your Support and Boost
            Sales. SparkAgentAI automates interactions for customer support,
            lead qualification, and more—delivering instant value from day one.
          </p>
          <div className="lg:flex items-center gap-2 justify-around hidden my-2">
            <Button className="w-[50%] bg-[#5555ff] hover:bg-white hover:text-black">
              Sign Up Free
            </Button>
            <div className="flex flex-col items-center text-center">
              <StarRating />
              <p>Based on 10,000+ reviews</p>
            </div>
          </div>
        </div>
        <div className="m-2">
          <img src={img1} alt="Main" className="lg:h-[400px] lg:w-[800px]" />
        </div>
        <p className="text-justify block lg:hidden mx-2">
          Quickly Build Smart AI Chatbots to Scale Your Support and Boost Sales.
          SparkAgentAI automates interactions for customer support, lead
          qualification, and more—delivering instant value from day one.
        </p>
        <div className="flex items-center gap-2 justify-around lg:hidden my-4">
          <Button className="w-[50%] bg-[#5555ff] hover:bg-white hover:text-black">
            Sign Up Free
          </Button>
          <div className="flex flex-col items-center text-center">
            <StarRating />
            <p>Based on 10,000+ reviews</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Intro;
