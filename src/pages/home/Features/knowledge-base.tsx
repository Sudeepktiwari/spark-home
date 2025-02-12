import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
import { ChevronsRight } from "lucide-react";
import t1 from "../../../assets/t1.png";
// import Lottie from "lottie-react";
import kbAnim from "../../../assets/knowledge base new.png";

const KnowledgeBase = () => {
  return (
    <div className="lg:flex lg:pt-24 gap-16 ">
      {/* Lottie
      autoplay
      loop
      animationData={kbAnim} */}
      <div className="lg:w-[50vw]">
        <img
          src={kbAnim}
          className="lg:w-[40vw] w-[90vw] h-auto lg:ml-20 shadow-lg lg:mt-3"
          // className="lg:h-[70vh] lg:w-[40vw] w-[90vw] h-[30vh] lg:mt-3 mx-0 py-0 lg:ml-20 shadow-lg"
        />
      </div>
      {/* <Skeleton className="lg:h-[80vh] lg:w-[50vw] w-[90vw] h-[30vh] md:h-[90vh] my-10 lg:my-0 " /> */}
      <div className="space-y-6 lg:w-[40vw] mt-10 lg:mt-0">
        <div className="flex items-center">
          <Button
            variant={"outline"}
            className=" lg:w-[25vw] text-xl 2xl:text-2xl font-light 
            rounded-full border-gray-500 hover:bg-white z-10"
          >
            AI Knowledge Base
          </Button>
          <img
            src={t1}
            alt="1"
            className="h-16 w-16 relative z-0 right-12 top-0.5"
          />
        </div>
        <p className="text-3xl lg:text-[44px] lg:leading-tight font-light">
          Centralize, Automate, and Elevate Your Knowledge Management
        </p>
        <p className="text-justify 2xl:text-2xl">
          Easily create a knowledge base by uploading documents, product feature
          requirements (FRD/PRD), or adding a website URL. The system
          automatically scrapes the website, generating help articles and FAQs
          that can be linked to the chatbot.
        </p>
        {/* <p className="text-justify 2xl:text-2xl">
          With SparkAgentAI’s knowledge base, keep your customer support
          accurate, consistent, and always up to date.
        </p> */}
        <Button className="text-lg lg:p-6 font-thin">
          Get Started <ChevronsRight />
        </Button>
      </div>
    </div>
  );
};

export default KnowledgeBase;
