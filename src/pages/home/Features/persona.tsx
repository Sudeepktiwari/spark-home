import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Persona = () => {
  return (
    <div className="lg:flex p-4 items-center lg:pt-24 gap-16 lg:mr-2">
      <Skeleton className="lg:h-[80vh] lg:w-[70vw] w-[90vw] h-[30vh] md:h-[90vh] my-10 lg:my-0 " />
      <div className="space-y-8 m-0 lg:m-4 lg:w-[30vw] ">
        <Button
          variant={"outline"}
          className=" w-[25vw] px-8 text-xl 2xl:text-2xl font-light rounded-full border-gray-500 hover:bg-white"
        >
          Persona-Based Chatbot Creation
        </Button>
        <p className="text-justify 2xl:text-xl">
          Build a chatbot based on different personas, including Sales, Support,
          Q&A, and RFP, to suit your business needs.
        </p>
        <p className="text-justify 2xl:text-xl">
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
        </p>
      </div>
    </div>
  );
};

export default Persona;
