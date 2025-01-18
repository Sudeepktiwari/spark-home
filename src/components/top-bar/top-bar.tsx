import Branding from "./branding";
import Menu from "./menu";
import BarEnd from "./bar-end";
import DropdownMenu from "./dropdown-menu";

const TopBar = () => {
  return (
    <div className="flex bg-white w-screen shadow-sm p-1 lg:p-2">
      <div className="flex items-center px-2 w-full">
        <div className="w-[60vw] lg:w-[25vw] ">
          <Branding />
        </div>
        <div
          className="hidden lg:flex justify-center 
        relative lg:ml-[10vw] xl:ml-[15vw] 2xl:ml-[20vw]"
        >
          <Menu />
        </div>
        <div className="lg:flex hidden ml-auto lg:mr-10">
          <BarEnd />
        </div>
      </div>
      {/* <div className="flex justify-center lg:hidden m-2">
        <Menu />
      </div> */}
      <DropdownMenu />
    </div>
  );
};

export default TopBar;
