import { useRef, useState, useEffect } from "react";
import Customization from "./customization";
import KnowledgeBase from "./knowledge-base";
import Persona from "./persona";
import {
  Menu,
  X,
  LibraryBig,
  SquarePen,
  UserPen,
  BadgeHelp,
} from "lucide-react";
import FixedNavBar from "./fixed-nav-bar";
import { Button } from "@/components/ui/button";
import Qna from "./qna";

const Features = () => {
  const featuresBarRef = useRef<HTMLDivElement>(null);
  const personaRef = useRef<HTMLDivElement>(null);
  const knowledgeBaseRef = useRef<HTMLDivElement>(null);
  const customizationRef = useRef<HTMLDivElement>(null);
  const qnaRef = useRef<HTMLDivElement>(null);

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
    }[section];

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (featuresBarRef.current) {
        const rect = featuresBarRef.current.getBoundingClientRect();
        setIsFeaturesNavVisible(rect.top < 0);
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
      default:
        return "";
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#fef9f3] to-white">
      {/* Mobile Menu - Show when scrolled past initial nav */}
      {isFeaturesNavVisible && (
        <div className="lg:hidden fixed top-0 left-0 pl-4 z-50 mobile-menu-container bg-white w-full">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-2 py-2 my-4 bg-white rounded-lg shadow hover:bg-gray-100"
            >
              <span className="mx-1">{getLabel()}</span>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div>
              <Button className="flex lg:hidden bg-[#555ff] mr-4 lg:mr-6">
                See Plans
              </Button>
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-16 left-4 w-[25vw] z-40 bg-white border rounded-lg shadow-lg">
              <ul className="py-2">
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavClick(personaRef, "persona")}
                >
                  <UserPen size={18} />
                  Persona
                </li>
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleNavClick(knowledgeBaseRef, "knowledgeBase")
                  }
                >
                  <LibraryBig size={18} />
                  AI Knowledge Base
                </li>
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() =>
                    handleNavClick(customizationRef, "customization")
                  }
                >
                  <SquarePen size={18} />
                  Brand Customization
                </li>
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleNavClick(qnaRef, "qna")}
                >
                  <BadgeHelp size={18} />
                  Q&A Management
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Desktop Fixed Navigation */}
      {isFeaturesNavVisible && (
        <div className="hidden lg:block fixed top-0 left-0 w-full bg-white z-30 shadow-md">
          <FixedNavBar
            personaRef={personaRef}
            knowledgeBaseRef={knowledgeBaseRef}
            customizationRef={customizationRef}
            qnaRef={qnaRef}
            activeButton={activeButton}
            onSetActiveButton={handleSetActiveButton}
          />
        </div>
      )}

      {/* Initial FixedNavBar at the top */}
      <div ref={featuresBarRef} className=" my-10 bg-white w-full shadow-md">
        <div className="hidden lg:block">
          <FixedNavBar
            personaRef={personaRef}
            knowledgeBaseRef={knowledgeBaseRef}
            customizationRef={customizationRef}
            qnaRef={qnaRef}
            activeButton={activeButton}
            onSetActiveButton={handleSetActiveButton}
          />
        </div>
        <div className="flex justify-between">
          <div className="lg:hidden mobile-menu-container ml-4 mb-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-2 py-2 bg-white rounded-lg hover:bg-gray-100"
            >
              <span className="mx-1">{getLabel()}</span>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {isOpen && (
              <div className="relative z-20 top-1 left-0 w-[25vw] bg-white border rounded-lg shadow-lg">
                <ul className="py-2">
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavClick(personaRef, "persona")}
                  >
                    <UserPen size={18} />
                    Persona
                  </li>
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavClick(knowledgeBaseRef, "knowledgeBase")
                    }
                  >
                    <LibraryBig size={18} />
                    AI Knowledge Base
                  </li>
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                      handleNavClick(customizationRef, "customization")
                    }
                  >
                    <SquarePen size={18} />
                    Brand Customization
                  </li>
                  <li
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleNavClick(qnaRef, "qna")}
                  >
                    <BadgeHelp size={18} />
                    Q&A management
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <Button className="flex lg:hidden bg-[#555ff] mr-4 lg:mr-6">
              See Plans
            </Button>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div ref={personaRef} className="min-h-screen mt-10 py-10">
        <Persona />
      </div>
      <div ref={knowledgeBaseRef} className="min-h-screen mt-10">
        <KnowledgeBase />
      </div>
      <div ref={customizationRef} className="min-h-screen mt-10">
        <Customization />
      </div>
      <div ref={qnaRef} className="min-h-screen mt-10">
        <Qna />
      </div>
    </div>
  );
};

export default Features;
