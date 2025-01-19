import React, { useRef, useState, useEffect } from "react";
import Customization from "./customization";
import KnowledgeBase from "./knowledge-base";
import Persona from "./persona";
import FeaturesNav from "./nav-features";
import { Button } from "@/components/ui/button";
import { LibraryBig, Menu, SquarePen, UserPen, X } from "lucide-react";

const Features = () => {
  const featuresBarRef = useRef<HTMLDivElement>(null);
  const personaRef = useRef<HTMLDivElement>(null);
  const knowledgeBaseRef = useRef<HTMLDivElement>(null);
  const customizationRef = useRef<HTMLDivElement>(null);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (featuresBarRef.current) {
        const rect = featuresBarRef.current.getBoundingClientRect();
        setIsMenuVisible(rect.top <= 0); // Check if `FeaturesBar` is at the top of the viewport
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Floating Menu Bar */}
      {isMenuVisible && (
        <div className="flex lg:hidden  fixed top-4 left-4">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-2 py-2 mr-4 mt-1 bg-gray-100 rounded-lg shadow hover:bg-gray-200"
          >
            {isOpen ? (
              <X className="w-10 h-10" />
            ) : (
              <Menu className="w-10 h-10" />
            )}
          </button>
          {isOpen && (
            <div className="absolute top-0 left-16 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
              <ul className="py-2">
                {/* Option 1: Profile */}
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => scrollToSection(personaRef)}
                >
                  <UserPen size={18} />
                  Persona
                </li>

                {/* Option 2: Settings */}
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => scrollToSection(knowledgeBaseRef)}
                >
                  <LibraryBig size={18} />
                  Knowledge Base
                </li>

                {/* Option 3: Help */}
                <li
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => scrollToSection(customizationRef)}
                >
                  <SquarePen size={18} />
                  Customization
                </li>

                {/* Option 4: Logout */}
                {/* <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Headset size={18} />
                  Contact Us
                </li> */}
                {/* <li className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
              <LogOut size={18} />
              Logout
            </li> */}
                {/* <li>
                  <BarEnd />
                </li> */}
              </ul>
            </div>
          )}
          <div
            className="fixed top-0 left-0 w-full hidden gap-2 lg:flex lg:items-center rounded-md 
          p-4 z-50 bg-gradient-to-r from-gray-200 to-white"
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
      )}

      {/* Components */}
      <div ref={featuresBarRef} className="relative mt-10">
        <FeaturesNav
          personaRef={personaRef}
          knowledgeBaseRef={knowledgeBaseRef}
          customizationRef={customizationRef}
        />
      </div>
      <div ref={personaRef} className="min-h-screen py-20">
        <Persona />
      </div>
      <div ref={knowledgeBaseRef} className="min-h-screen py-20">
        <KnowledgeBase />
      </div>
      <div ref={customizationRef} className="min-h-screen py-20">
        <Customization />
      </div>
    </div>
  );
};

export default Features;
