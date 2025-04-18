import React, { RefObject } from "react";
import { Button } from "@/components/ui/button";

interface FixedNavBarProps {
  personaRef: RefObject<HTMLDivElement>;
  knowledgeBaseRef: RefObject<HTMLDivElement>;
  customizationRef: RefObject<HTMLDivElement>;
  qnaRef: RefObject<HTMLDivElement>;
  conversationRef: RefObject<HTMLDivElement>;
  activeButton: string;
  onSetActiveButton: (section: string) => void;
}

const FixedNavBar: React.FC<FixedNavBarProps> = ({
  activeButton,
  onSetActiveButton,
}) => {
  return (
    <div className="flex justify-between pt-6 h-[8vh]">
      <div className="ml-4 text-lg">
        <p>Features: </p>
      </div>
      <div className="flex">
        <Button
          className={`block rounded-none ${
            activeButton === "persona"
              ? "border-b-4 border-blue-500 border-x-0 border-t-0"
              : "border-none"
          } bg-white pb-10 px-2 pt-0 text-black hover:bg-gray-100 focus:outline-none 
          shadow-none font-light`}
          onClick={() => onSetActiveButton("persona")}
        >
          Persona
        </Button>
        <Button
          className={`block rounded-none ${
            activeButton === "knowledgeBase"
              ? "border-b-4 border-blue-500 border-x-0 border-t-0"
              : "border-none"
          } bg-white pb-10 px-2 pt-0 text-black hover:bg-gray-100 focus:outline-none 
          shadow-none font-light`}
          onClick={() => onSetActiveButton("knowledgeBase")}
        >
          AI Knowledge Base
        </Button>
        <Button
          className={`block rounded-none ${
            activeButton === "customization"
              ? "border-b-4 border-blue-500 border-x-0 border-t-0"
              : "border-none"
          } bg-white pb-10 px-2 pt-0 text-black hover:bg-gray-100 focus:outline-none 
          shadow-none font-light`}
          onClick={() => onSetActiveButton("customization")}
        >
          Brand Customization
        </Button>
        <Button
          className={`block rounded-none ${
            activeButton === "qna"
              ? "border-b-4 border-blue-500 border-x-0 border-t-0"
              : "border-none"
          } bg-white pb-10 px-2 pt-0 text-black hover:bg-gray-100 focus:outline-none 
          shadow-none font-light`}
          onClick={() => onSetActiveButton("qna")}
        >
          Q&A Management
        </Button>
        <Button
          className={`block rounded-none ${
            activeButton === "conversation"
              ? "border-b-4 border-blue-500 border-x-0 border-t-0"
              : "border-none"
          } bg-white pb-10 px-2 pt-0 text-black hover:bg-gray-100 focus:outline-none 
          shadow-none font-light`}
          onClick={() => onSetActiveButton("conversation")}
        >
          Conversation Analysis
        </Button>
      </div>
      <div>
        <Button className="bg-[#555ff] mr-4">See Plans</Button>
      </div>
    </div>
  );
};

export default FixedNavBar;
