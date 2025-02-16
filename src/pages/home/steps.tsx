import { Button } from "@/components/ui/button";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
// import Lottie from "lottie-react";
import stepsAnim from "../../assets/steps-vid.webm";
import stepswAnim from "../../assets/sparktest.mp4";

const Steps = () => {
  return (
    <div className="px-4 bg-white">
      <h1
        className="text-center text-2xl lg:text-5xl lg:p-16 "
        style={{ fontWeight: 300 }}
      >
        Build Your Custom Chatbot in{" "}
        <span className="block lg:inline text-orange-400">3 Simple Steps</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center mt-10 gap-0 lg:gap-20  ">
        <div className="space-y-[15px] lg:w-[30vw] ">
          <div className="flex lg:hidden justify-center w-[90vw]">
            <video
              autoPlay
              loop
              playsInline
              muted
              className="w-[90vw] h-[30vh] m-0 mx-0 py-0 object-cover"
            >
              <source src={stepsAnim} type="video/mp4" />
            </video>
            {/* <Skeleton className="h-[30vh] w-[90vw]" /> */}
          </div>
          <div className="flex items-center gap-2 mt-6 lg:mt-0">
            {/* <NumberCircleOne size={40} className="text-gray-500" /> */}
            <img src={t1} alt="1" className="h-16 w-16 bg-white rounded-full" />
            <Button
              variant={"outline"}
              className=" text-xl py-4 rounded-full w-[60vw] lg:w-[20vw] border-gray-500 hover:bg-white 2xl:text-2xl"
              style={{ fontWeight: 300 }}
            >
              Add Data Sources
            </Button>
          </div>
          <p className="2xl:text-xl pl-4">
            Start by creating your knowledge base. Upload files, input text, or
            link a website to provide your chatbot with relevant information.
          </p>
          <div className="flex items-center gap-2 mt-6">
            {/* <NumberCircleTwo size={40} className="text-gray-500" /> */}
            <img src={t2} alt="1" className="h-16 w-16 bg-white rounded-full" />
            <Button
              variant={"outline"}
              className=" text-xl py-4 rounded-full w-[60vw] lg:w-[20vw] border-gray-500 hover:bg-white 2xl:text-2xl"
              style={{ fontWeight: 300 }}
            >
              Create Your Chatbot
            </Button>
          </div>

          <p className="2xl:text-xl pl-4">
            Configure your AI chatbot’s personality. Choose from available
            personas—like a Sales Assistant or Support Agent—and personalize its
            name.
          </p>
          <div className="flex items-center gap-2 mt-6">
            {/* <NumberCircleThree size={40} className="text-gray-500" /> */}
            <img src={t3} alt="1" className="h-16 w-16 bg-white rounded-full" />

            <Button
              variant={"outline"}
              className=" text-xl py-4 rounded-full w-[60vw] lg:w-[20vw]  border-gray-500 hover:bg-white 2xl:text-2xl"
              style={{ fontWeight: 300 }}
            >
              Experience & Integrate
            </Button>
          </div>

          <p className="2xl:text-xl pl-4">
            Interact with your chatbot by asking questions and rating responses.
            Then, get the integration code to easily add it to your website.
          </p>
        </div>
        <div className="hidden lg:flex w-[55vw]">
          <video
            autoPlay
            loop
            playsInline
            muted
            src={stepsAnim}
            className="lg:w-[52vw] lg:h-[75vh] m-0 mx-0 py-0 object-cover mt-8"
          >
            <source src={stepswAnim} type="video/mp4" />
          </video>
          {/* <Skeleton className="h-[80vh] w-[60vw]" /> */}
        </div>
      </div>
    </div>
  );
};

export default Steps;
