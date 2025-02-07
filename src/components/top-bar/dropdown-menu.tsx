import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Headset,
  LayoutList,
  ShieldCheck,
  BookOpenText,
  CircleHelp,
} from "lucide-react";
import BarEnd from "./bar-end";
import { useNavigate } from "react-router-dom";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  return (
    <div className=" relative inline-block lg:hidden text-left">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="flex items-center  py-2 mt-1 bg-black text-white rounded-lg hover:bg-gray-900 focus:outline-none"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <Menu className="w-8 h-8 font-thin" />
        )}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 p-4">
          <ul className="py-2">
            {/* Option 1: Profile */}
            <li className="flex items-center gap-2  py-2 hover:bg-gray-100 cursor-pointer">
              <Home size={18} />
              Home
            </li>

            <li className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
              <LayoutList size={18} />
              Features
            </li>

            {/* Option 2: Settings */}
            <li className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
              <ShieldCheck size={18} />
              Security
            </li>

            {/* Option 3: Help */}
            <li className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
              <BookOpenText size={18} />
              Resources
            </li>

            {/* Option 4: Logout */}
            <li className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer">
              <Headset size={18} />
              Contact Us
            </li>
            <li
              className="flex items-center gap-2 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => navigate("/faq")}
            >
              <CircleHelp size={18} />
              FAQ
            </li>
            {/* <li className="flex items-center gap-2  py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
              <LogOut size={18} />
              Logout
            </li> */}
            <li>
              <BarEnd />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
