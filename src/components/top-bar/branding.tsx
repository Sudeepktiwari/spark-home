import React from "react";
import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain mt-1" />
        <div>
          <p className="text-black text-xl lg:text-2xl font-sans font-bold">
            Spark Agent AI
          </p>
          <p className="text-xs">
            Perfect for Growing Small{" "}
            <span className="block lg:inline">and Medium Businesses</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Branding;
