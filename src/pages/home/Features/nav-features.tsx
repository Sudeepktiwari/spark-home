import React, { useEffect, useState } from "react";
import FixedNavBar from "./fixed-nav-bar";
import { LibraryBig, Menu, SquarePen, UserPen, X } from "lucide-react";

interface FeaturesNavProps {
  personaRef: React.RefObject<HTMLDivElement>;
  knowledgeBaseRef: React.RefObject<HTMLDivElement>;
  customizationRef: React.RefObject<HTMLDivElement>;
  activeButton: string;
  onSetActiveButton: (section: string) => void;
}

const FeaturesNav: React.FC<FeaturesNavProps> = ({
  personaRef,
  knowledgeBaseRef,
  customizationRef,
  activeButton,
  onSetActiveButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Dropdown Function
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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
      onSetActiveButton(section);
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div></div>
      {/* Mobile Menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50 mobile-menu-container">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-2 py-2 bg-white rounded-lg shadow hover:bg-gray-100"
        >
          {/* Display selected label */}
          {isOpen ? (
            <X className="w-6 h-6 ml-2" />
          ) : (
            <Menu className="w-6 h-6 ml-2" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-12 left-0 w-48 bg-white border rounded-lg shadow-lg">
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
                Knowledge Base
              </li>
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() =>
                  handleNavClick(customizationRef, "customization")
                }
              >
                <SquarePen size={18} />
                Customization
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Navigation Bar */}
      <div className="hidden lg:block fixed top-0 left-0 w-full bg-white z-40 shadow-md">
        <FixedNavBar
          personaRef={personaRef}
          knowledgeBaseRef={knowledgeBaseRef}
          customizationRef={customizationRef}
          activeButton={activeButton}
          onSetActiveButton={onSetActiveButton}
        />
      </div>
    </div>
  );
};

export default FeaturesNav;
