import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
import { ChevronsRight } from "lucide-react";
import t1 from "../../../assets/t1.png";
import Lottie from "lottie-react";
import qnaAnim from "../../../assets/NewImages/QandA.json";

const Qna = () => {
  return (
    <div className="lg:flex lg:pt-24 gap-16 ">
      <div
        className="lg:w-[50vw] w-[320px] overflow-hidden lg:mt-4 
      lg:pl-20 pl-0 shadow-lg lg:shadow-none"
      >
        <Lottie
          autoplay
          loop
          animationData={qnaAnim}
          className="lg:w-[41vw] lg:h-[60vh] h-[220px] w-[320px] object-cover lg:shadow-lg"
        />
      </div>
      {/* <Skeleton className="lg:h-[80vh] lg:w-[50vw] w-[90vw] h-[30vh] md:h-[90vh] my-10 lg:my-0 " /> */}
      <div className="relative space-y-8 lg:w-[40vw] mt-10 lg:mt-2">
        <div className="flex items-center">
          <Button
            variant={"outline"}
            className=" lg:w-[25vw] text-xl 2xl:text-2xl font-light rounded-full
           border-gray-500 hover:bg-white z-10"
          >
            Q&A Management
          </Button>
          <img
            src={t1}
            alt="1"
            className="h-16 w-16 relative z-0 right-12 top-0.5"
          />
        </div>
        <p className="text-3xl lg:text-[44px] lg:leading-tight font-light">
          Refine, Improve, and Optimize Your Knowledge Continuously
        </p>
        <p className="text-justify 2xl:text-2xl">
          Ensure accurate responses by filtering and updating unanswered or
          low-rated queries. Continuously improve the chatbot’s performance by
          updating the knowledge base with relevant and frequently asked
          questions to enhance customer support and satisfaction.
        </p>
        <p className="text-justify 2xl:text-2xl">
          Your chatbot evolves with every conversation, ensuring smarter and
          more effective support for your customers.
        </p>
        <Button className="text-lg lg:p-6 font-thin lg:absolute lg:bottom-0">
          Get Started <ChevronsRight />
        </Button>
      </div>
    </div>
  );
};

export default Qna;
