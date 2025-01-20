import React, { useState } from "react";
import { Menu, X, Home, Info, CircleDollarSign, Headset } from "lucide-react";
import BarEnd from "./bar-end";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className=" relative inline-block lg:hidden text-left">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-2 py-2 mr-4 mt-1 bg-white rounded-lg hover:bg-gray-200"
      >
        {isOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
          <ul className="py-2">
            {/* Option 1: Profile */}
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Home size={18} />
              Home
            </li>

            {/* Option 2: Settings */}
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Info size={18} />
              About Us
            </li>

            {/* Option 3: Help */}
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <CircleDollarSign size={18} />
              Pricing
            </li>

            {/* Option 4: Logout */}
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Headset size={18} />
              Contact Us
            </li>
            {/* <li className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
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
