import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div className="m-1 lg:ml-4">
      <div className="flex flex-row items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain mt-1" />
        <div>
          <p className="text-black text-xl lg:text-2xl font-bold">
            Spark Agent AI
          </p>
        </div>
      </div>
      <p className="text-xs">
        Perfect for Growing Small{" "}
        <span className="block lg:inline">and Medium Businesses</span>
      </p>
    </div>
  );
};

export default Branding;
