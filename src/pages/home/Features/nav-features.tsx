import React from "react";
import { Button } from "@/components/ui/button";

type FeaturesNavProps = {
  personaRef: React.RefObject<HTMLDivElement>;
  knowledgeBaseRef: React.RefObject<HTMLDivElement>;
  customizationRef: React.RefObject<HTMLDivElement>;
};

const FeaturesNav: React.FC<FeaturesNavProps> = ({
  personaRef,
  knowledgeBaseRef,
  customizationRef,
}) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Floating Menu Bar */}

      <div
        className="gap-2 flex lg:items-center rounded-md p-4 z-50 bg-gradient-to-r
     from-gray-200 to-white"
      >
        <Button
          className="block px-4 py-2 text-left rounded-full"
          onClick={() => scrollToSection(personaRef)}
        >
          Persona
        </Button>
        <Button
          className="block px-4 py-2 text-left rounded-full"
          onClick={() => scrollToSection(knowledgeBaseRef)}
        >
          Knowledge Base
        </Button>
        <Button
          className="block px-4 py-2 text-left rounded-full"
          onClick={() => scrollToSection(customizationRef)}
        >
          Customization
        </Button>
      </div>
    </div>
  );
};

export default FeaturesNav;
