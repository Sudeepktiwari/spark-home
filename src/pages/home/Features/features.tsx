import { useRef, useState, useEffect } from "react";
import Customization from "./customization";
import KnowledgeBase from "./knowledge-base";
import Persona from "./persona";
import {
  X,
  LibraryBig,
  SquarePen,
  UserPen,
  BadgeHelp,
  ChevronDown,
  BotMessageSquare,
} from "lucide-react";
import FixedNavBar from "./fixed-nav-bar";
import { Button } from "@/components/ui/button";
import Qna from "./qna";
import ConversationAnalysis from "./conversation-analysis";

const Features = () => {
  const featuresBarRef = useRef<HTMLDivElement>(null);
  const personaRef = useRef<HTMLDivElement>(null);
  const knowledgeBaseRef = useRef<HTMLDivElement>(null);
  const customizationRef = useRef<HTMLDivElement>(null);
  const qnaRef = useRef<HTMLDivElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);

  const [isFeaturesNavVisible, setIsFeaturesNavVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("persona");
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActiveButton = (section: string) => {
    setActiveButton(section);
    const sectionRef = {
      persona: personaRef,
      knowledgeBase: knowledgeBaseRef,
      customization: customizationRef,
      qna: qnaRef,
      conversation: conversationRef,
    }[section];

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (featuresBarRef.current && conversationRef.current) {
        const featuresRect = featuresBarRef.current.getBoundingClientRect();
        const conversationRect =
          conversationRef.current.getBoundingClientRect();

        setIsFeaturesNavVisible(featuresRect.top < 0);
        if (featuresRect.top < 0 && conversationRect.bottom > 0) {
          setIsFeaturesNavVisible(true);
        } else {
          setIsFeaturesNavVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click outside handler to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = (
    ref: React.RefObject<HTMLDivElement>,
    section: string
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveButton(section);
      setIsOpen(false);
    }
  };
  const getLabel = () => {
    switch (activeButton) {
      case "persona":
        return "Persona";
      case "knowledgeBase":
        return "Knowledge Base";
      case "customization":
        return "Customization";
      case "qna":
        return "QnA";
      case "conversation":
        return "Conversation";
      default:
        return "";
    }
  };
  return (
    // <div className="bg-gradient-to-r from-[#fef9f3] to-white">
    <div className="bg-transparent w-[98vw] lg:w-auto ">
      {/* Mobile Menu - Show when scrolled past initial nav */}
      {isFeaturesNavVisible && (
        <div className="lg:hidden fixed top-0 left-0 pl-4 pt-2.5 pb-2.5 z-50 mobile-menu-container w-full bg-white ">
          <div className="flex items-center">
            <div className="flex text-xl">Features: </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center py-2 my-2 gap-2 bg-white rounded-lg hover:bg-gray-100"
            >
              <span className=" font-light">{getLabel()}</span>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>

            <Button className="lg:hidden bg-[#555ff] ml-auto mr-10 justify-end">
              See Plans
            </Button>
          </div>
          {isOpen && (
            <div className="absolute top-16 left-4 w-[60vw] z-40 bg-white border rounded-lg shadow-lg">
              <ul className="py-2">
                <li
                  className="flex items-center gap-2  py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavClick(personaRef, "persona")}
                >
                  <UserPen size={18} />
                  Persona
                </li>
                <li
                  className="flex items-center gap-2  py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleNavClick(knowledgeBaseRef, "knowledgeBase")
                  }
                >
                  <LibraryBig size={18} />
                  AI Knowledge Base
                </li>
                <li
                  className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleNavClick(customizationRef, "customization")
                  }
                >
                  <SquarePen size={18} />
                  Brand Customization
                </li>
                <li
                  className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavClick(qnaRef, "qna")}
                >
                  <BadgeHelp size={18} />
                  Q&A Management
                </li>
                <li
                  className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleNavClick(conversationRef, "conversation")
                  }
                >
                  <BotMessageSquare size={18} />
                  Conversation Analysis
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Desktop Fixed Navigation */}
      {isFeaturesNavVisible && (
        <div className="hidden lg:block fixed top-0 lg:h-[12vh] pt-5 left-0 w-full bg-white z-30 shadow-md">
          <FixedNavBar
            personaRef={personaRef}
            knowledgeBaseRef={knowledgeBaseRef}
            customizationRef={customizationRef}
            qnaRef={qnaRef}
            conversationRef={conversationRef}
            activeButton={activeButton}
            onSetActiveButton={handleSetActiveButton}
          />
        </div>
      )}

      {/* Initial FixedNavBar at the top */}
      <div ref={featuresBarRef} className=" my-5 shadow-md">
        <div className="hidden lg:block">
          <FixedNavBar
            personaRef={personaRef}
            knowledgeBaseRef={knowledgeBaseRef}
            customizationRef={customizationRef}
            qnaRef={qnaRef}
            conversationRef={conversationRef}
            activeButton={activeButton}
            onSetActiveButton={handleSetActiveButton}
          />
        </div>
        <div className="flex items-center relative bottom-2">
          <div
            className="lg:hidden
            mobile-menu-container py-2 w-full"
          >
            <div className="flex items-center mt-0 ml-4">
              <div className="text-xl">Features:</div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center py-0 mt-1 h-[4vh] gap-2 bg-white rounded-lg hover:bg-gray-100"
              >
                <span className="font-light ">{getLabel()}</span>
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>

              <Button className="lg:hidden bg-[#555ff]  ml-auto mr-10">
                See Plans
              </Button>
            </div>

            <div>
              {isOpen && (
                <div className="relative z-20 top-1 left-0 w-[60vw] bg-white border rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li
                      className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleNavClick(personaRef, "persona")}
                    >
                      <UserPen size={18} />
                      Persona
                    </li>
                    <li
                      className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleNavClick(knowledgeBaseRef, "knowledgeBase")
                      }
                    >
                      <LibraryBig size={18} />
                      AI Knowledge Base
                    </li>
                    <li
                      className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleNavClick(customizationRef, "customization")
                      }
                    >
                      <SquarePen size={18} />
                      Brand Customization
                    </li>
                    <li
                      className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleNavClick(qnaRef, "qna")}
                    >
                      <BadgeHelp size={18} />
                      Q&A management
                    </li>
                    <li
                      className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleNavClick(conversationRef, "conversation")
                      }
                    >
                      <BotMessageSquare size={18} />
                      Conversation Analysis
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        {/* Sections */}
        <div ref={personaRef} className="mt-10">
          <Persona />
        </div>
        <div ref={knowledgeBaseRef} className="mt-10">
          <KnowledgeBase />
        </div>
        <div ref={customizationRef} className="mt-10">
          <Customization />
        </div>
        <div ref={qnaRef} className="mt-10">
          <Qna />
        </div>
        <div ref={conversationRef} className="mt-10">
          <ConversationAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Features;
