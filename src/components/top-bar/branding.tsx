import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div className="m-1 lg:ml-4">
      <div className="flex flex-row lg:items-center gap-2">
        <img
          src={logo}
          alt="Logo"
          className="h-15 w-15 lg:h-10 lg:w-10 object-contain mt-1"
        />
        <div>
          <p className=" text-xl lg:text-2xl font-semibold">
            SparkAgent <span className="text-[26px]">AI</span>
          </p>
          <p className="text-xs block lg:hidden">
            Perfect for Growing Small{" "}
            <span className="block lg:inline">and Medium Businesses</span>
          </p>
        </div>
      </div>
      <p className="text-xs hidden lg:block">
        Perfect for Growing Small{" "}
        <span className="block lg:inline">and Medium Businesses</span>
      </p>
    </div>
  );
};

export default Branding;
