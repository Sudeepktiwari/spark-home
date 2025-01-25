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
    <div>
      <div
        style={{
          backgroundImage: `url(${imglightbg})`,
        }}
        // bg-[size:60%_50%]
        className="
      lg:bg-[size:98%_130%] bg-[size:100%_80%] bg-no-repeat bg-right-bottom lg:bg-center
      lg:gap-2 lg:py-20 lg:flex items-center bg-black shadow-2xl "
      >
        <div className="lg:pl-44 lg:w-[40vw] relative bottom-14 ">
          <p
            style={{ fontFamily: "Roboto" }}
            className=" text-center text-white lg:text-start text-2xl lg:text-[2rem] 2xl:text-[2.5rem] 
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
            className="text-xs text-center text-white py-4 pt-8 lg:text-start lg:text-sm 2xl:text-xl font-light "
          >
            The AI Chatbot You Can{" "}
            <span className="font-semibold underline underline-offset-4 text-orange-500">
              Set Up in 1 Minute
            </span>
            —Easier and Faster Than Any Other!
          </p>
          <div className=" gap-8 items-center flex lg:w-[30vw] pt-4">
            <Button
              className=" bg-[#5555ff] hover:bg-white hover:text-black text-[24px] 
            lg:w-[16vw] rounded-full py-8 "
            >
              Sign Up Free
            </Button>
            <div className="flex flex-col items-center text-center text-white ">
              <StarRating />
              <p>Based on 10,000+ reviews</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[10vw] lg:h-[60vh] relative lg:left-16 lg:bottom-6">
          <Lottie
            autoplay
            loop
            animationData={introAnim}
            className="lg:w-[50vw] lg:h-[60vh] w-[90vw] py-4 px-4"
          />
        </div>

        {/* <div
        className="hidden w-[90vw] h-[90vh]
        object-cover"
        >
        <img src={imglightbg} alt="Background" />
        </div> */}
      </div>
      <div className="lg:flex items-center  py-10 bg-black">
        <p className="flex items-center text-lg text-center px-20 text-white ">
          Quickly Build Smart AI Chatbots to Scale Your Support and Boost Sales.
          SparkAgentAI automates interactions for customer support, lead
          qualification, and more—delivering instant value from day one.
        </p>
        {/* <div className=" justify-center gap-4 items-center flex lg:w-[50vw]">
          <Button className=" bg-[#5555ff] hover:bg-white hover:text-black lg:w-[20vw] ">
            Sign Up Free
          </Button>
          <div className="flex flex-col items-center text-center w-[20vw]">
            <StarRating />
            <p>Based on 10,000+ reviews</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
