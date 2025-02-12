import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
import { ChevronsRight } from "lucide-react";
import t1 from "../../../assets/t1.png";
// import Lottie from "lottie-react";
import personaAnim from "../../../assets/Persona.png";

const Persona = () => {
  return (
    <div className="lg:flex lg:mt-10 mt-0 lg:gap-20 ">
      {/* <Lottie
        autoplay
        loop
        animationData={personaAnim} */}
      <div className="w-[50vw]">
        <img
          src={personaAnim}
          className="lg:h-[70vh] lg:w-[40vw] w-[90vw] h-[30vh] lg:mt-3 mx-0 py-0 lg:ml-20 shadow-lg"
        />
      </div>
      {/* <Skeleton className="lg:h-[80vh] lg:w-[50vw] w-[90vw] h-[30vh] md:h-[90vh]" /> */}
      <div className="space-y-6 lg:w-[40vw] mt-10 lg:mt-0 ">
        <div className="flex items-center">
          <Button
            variant={"outline"}
            className=" lg:w-[25vw] text-xl 2xl:text-2xl font-light 
            rounded-full border-gray-500 hover:bg-white z-10"
          >
            Persona-Based Chatbot
          </Button>
          <img
            src={t1}
            alt="1"
            className="h-16 w-16 relative z-0 right-12 top-0.5"
          />
        </div>
        <p className="text-3xl lg:text-[44px] lg:leading-tight font-light">
          Tailored AI Chatbots to Suit Every Business Need
        </p>
        <p className="text-justify 2xl:text-xl">
          Build chatbots customized for specific business roles such as Sales,
          Support, or RFP handling. Enable sales-focused bots to drive
          conversions, support bots to handle customer queries efficiently, and
          RFP bots to streamline internal communications and processes.
        </p>
        {/* <p className="text-justify 2xl:text-xl">
          Build a chatbot based on different personas, including Sales, Support,
          Q&A, and RFP, to suit your business needs.
        </p> */}
        {/* <p className="text-justify 2xl:text-xl">
          <Badge>Sales:</Badge> Helps with product recommendations and sales
          inquiries, turning potential visitors into customers.
        </p>
        <p className="text-justify 2xl:text-xl">
          <Badge>Support:</Badge> Provides troubleshooting and support to
          customers, ensuring quick resolution to common issues.
        </p>
        <p className="text-justify 2xl:text-xl">
          <Badge>Q&A:</Badge> Answers frequently asked questions based on your
          knowledge base, improving customer engagement.
        </p>
        <p className="text-justify 2xl:text-xl">
          <Badge>RFP:</Badge> Assists with Request for Proposal inquiries,
          streamlining business communication and responses (For internal team)
        </p> */}
        <Button className="text-lg lg:p-6 font-thin">
          Get Started <ChevronsRight />
        </Button>
      </div>
    </div>
  );
};

export default Persona;
