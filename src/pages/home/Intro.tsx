// import img1 from "../../assets/sparkagentai-1.webp";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Star } from "lucide-react";
import introAnim from "../../assets/NewImages/Hero Head.json";
import imglightbg from "../../assets/NewImages/light-mode.png";

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
      style={{
        backgroundImage: `url(${imglightbg})`,
      }}
      className="lg:bg-cover lg:bg-center bg-none w-screen h-screen
      lg:flex lg:items-center lg:gap-8 pt-0 mt-10 lg:pt-32 lg:pb-56"
    >
      <div className="mx-4 lg:ml-52 lg:w-[30vw]">
        <p
          style={{ fontFamily: "Roboto" }}
          className=" text-center lg:text-start text-2xl lg:text-[2rem] 2xl:text-[2.5rem] 
          leading-tight pt-10 lg:pt-0 font-medium "
        >
          Empower Your Team{" "}
          <span className="text-sm block lg:inline lg:text-[2rem] 2xl:text-[2.5rem]">
            with an AI Agent for Exceptional{" "}
            <span className="inline">Customer Experience</span>
          </span>
        </p>
        <p
          style={{ fontFamily: "Open Sans" }}
          className="text-xs text-center py-4 lg:py-0 lg:text-start lg:text-sm 2xl:text-xl font-light "
        >
          The AI Chatbot You Can{" "}
          <span className="font-semibold underline underline-offset-4 text-orange-500">
            Set Up in 1 Minute
          </span>
          —Easier and Faster Than Any Other!
        </p>
        <p
          className="text-justify hidden lg:block text-sm pt-0 lg:pt-5 2xl:text-lg font-light"
          style={{ fontFamily: "Open Sans", lineHeight: "22px" }}
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
      <div className="lg:w-[40vw] lg:h-[60vh]">
        <Lottie
          autoplay
          loop
          animationData={introAnim}
          className="lg:w-[50vw] lg:h-[60vh] px-4 py-4"
          // style={{ width: "50vw", height: "70vh" }}
        />
        {/* <img src={img1} alt="Main" className="lg:h-[70vh] lg:w-[90vw]" /> */}
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

      <div
        className="hidden w-[90vw] h-[90vh]
      object-cover"
      >
        <img src={imglightbg} alt="Background" />
      </div>
    </div>
  );
};

export default Intro;
