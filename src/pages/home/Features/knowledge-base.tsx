import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const KnowledgeBase = () => {
  return (
    <div className="lg:flex p-4 lg:pt-24 gap-16 lg:mr-2">
      <Skeleton className="lg:h-[80vh] lg:w-[70vw] w-[90vw] h-[30vh] md:h-[90vh] my-10 lg:my-0 " />
      <div className="space-y-8 m-0 lg:mx-4 lg:w-[30vw] ">
        <Button
          variant={"outline"}
          className=" lg:w-[25vw] text-xl 2xl:text-2xl font-light rounded-full border-gray-500 hover:bg-white"
        >
          AI Knowledge Base
        </Button>
        <p className="text-justify 2xl:text-2xl">
          Easily create a knowledge base by uploading documents, product feature
          requirements (FRD/PRD), or adding a website URL. The system
          automatically scrapes the website, generating help articles and FAQs
          that can be linked to the chatbot.
        </p>
      </div>
    </div>
  );
};

export default KnowledgeBase;
