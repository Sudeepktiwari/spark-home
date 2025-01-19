import { Skeleton } from "@/components/ui/skeleton";

const Persona = () => {
  return (
    <div className="lg:flex p-4 items-center lg:pt-24 gap-20 lg:mr-2">
      <Skeleton className="lg:h-[70vh] lg:w-[80vw] w-[90vw] h-[30vh] my-10 lg:my-0 " />
      <div className="space-y-4 ">
        <h1 className="text-2xl lg:text-[2rem] font-light">
          AI Knowledge Base
        </h1>
        <p>
          Easily create a knowledge base by uploading documents, product feature
          requirements (FRD/PRD), or adding a website URL. The system
          automatically scrapes the website, generating help articles and FAQs
          that can be linked to the chatbot.
        </p>
      </div>
    </div>
  );
};

export default Persona;
