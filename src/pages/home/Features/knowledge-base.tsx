import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronsRight } from "lucide-react";
import t1 from "../../../assets/t1.png";

const KnowledgeBase = () => {
  return (
    <div className="lg:flex p-4 lg:pt-24 gap-16 lg:mr-2">
      <Skeleton className="lg:h-[70vh] lg:w-[50vw] w-[90vw] h-[30vh] md:h-[90vh] my-10 lg:my-0 " />
      <div className="space-y-8 m-0 lg:mx-4 lg:w-[40vw] ">
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
        <p className="text-2xl font-light">
          Centralize, Automate, and Elevate Your Knowledge Management
        </p>
        <p className="text-justify 2xl:text-2xl">
          SparkAgentAI provides a centralized hub for managing all your
          knowledge sources. Easily upload documents, such as FRDs, PRDs, and
          legacy FAQs, or integrate seamlessly with internal data systems like
          Google Drive, SharePoint, and more. You can also scrape content from
          your website to generate FAQs, help articles, and key insights that
          can be linked directly to your chatbot.
        </p>
        <p className="text-justify 2xl:text-2xl">
          With SparkAgentAI’s knowledge base, keep your customer support
          accurate, consistent, and always up to date.
        </p>
        <Button className="text-lg lg:p-6 font-thin">
          Get Started <ChevronsRight />
        </Button>
      </div>
    </div>
  );
};

export default KnowledgeBase;
