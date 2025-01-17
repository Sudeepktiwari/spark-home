import Branding from "./branding";
import Menu from "./menu";
import BarEnd from "./bar-end";
import DropdownMenu from "./dropdown-menu";

const TopBar = () => {
  return (
    <div className="flex bg-white w-screen shadow-sm p-1 lg:p-2">
      <div className="flex items-center px-2 w-full">
        <div>
          <Branding />
        </div>
        <div className="ml-44 hidden lg:flex">
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
