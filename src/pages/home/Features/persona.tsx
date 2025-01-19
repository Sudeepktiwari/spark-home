import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const Persona = () => {
  return (
    <div className="lg:flex p-4 items-center lg:pt-24 gap-20 lg:mr-2">
      <Skeleton className="lg:h-[70vh] lg:w-[80vw] w-[90vw] h-[30vh] my-10 lg:my-0 " />
      <div className="space-y-4 ">
        <h1 className="text-2xl lg:text-[2rem] font-light">
          Persona-Based Chatbot Creation
        </h1>
        <p>
          Build a chatbot based on different personas, including Sales, Support,
          Q&A, and RFP, to suit your business needs.
        </p>
        <p>
          <Badge>Sales:</Badge> Helps with product recommendations and sales
          inquiries, turning potential visitors into customers.
        </p>
        <p>
          <Badge>Support:</Badge> Provides troubleshooting and support to
          customers, ensuring quick resolution to common issues.
        </p>
        <p>
          <Badge>Q&A:</Badge> Answers frequently asked questions based on your
          knowledge base, improving customer engagement.
        </p>
        <p>
          <Badge>RFP:</Badge> Assists with Request for Proposal inquiries,
          streamlining business communication and responses (For internal team)
        </p>
      </div>
    </div>
  );
};

export default Persona;
