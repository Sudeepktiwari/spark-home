import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
import { ChevronsRight } from "lucide-react";
import t1 from "../../../assets/t1.png";
import Lottie from "lottie-react";
import conversationAnim from "../../../assets/NewImages/conversation.json";

const ConversationAnalysis = () => {
  return (
    <div className="lg:flex lg:pt-24 gap-16 ">
      <Lottie
        autoplay
        loop
        animationData={conversationAnim}
        className="lg:h-[80vh] lg:w-[50vw] w-[90vw] h-[30vh] m-0 mx-0 py-0"
      />
      {/* <Skeleton className="lg:h-[80vh] lg:w-[50vw] w-[90vw] h-[30vh] md:h-[90vh] my-10 lg:my-0 " /> */}
      <div className="space-y-8 lg:w-[40vw] ">
        <div className="flex items-center">
          <Button
            variant={"outline"}
            className=" lg:w-[25vw] text-xl 2xl:text-2xl font-light rounded-full
           border-gray-500 hover:bg-white z-10"
          >
            Conversation Analysis
          </Button>
          <img
            src={t1}
            alt="1"
            className="h-16 w-16 relative z-0 right-12 top-0.5"
          />
        </div>
        <p className="text-3xl lg:text-[44px] lg:leading-tight font-light">
          Understand, Optimize, and Drive Engagement with Smart Conversation
          Insights
        </p>
        <p className="text-justify 2xl:text-2xl">
          Analyze customer interactions to extract valuable insights that help
          refine website content and optimize the customer journey. Identify
          trends, address common concerns, and make data-driven improvements to
          boost engagement and conversion rates.
        </p>
        <Button className="text-lg lg:p-6 font-thin">
          Get Started <ChevronsRight />
        </Button>
      </div>
    </div>
  );
};

export default ConversationAnalysis;
