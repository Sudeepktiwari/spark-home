import Branding from "./branding";
import Menu from "./menu";
import BarEnd from "./bar-end";
import DropdownMenu from "./dropdown-menu";
// bg - [#ffefcb];
const TopBar = () => {
  return (
    <div className="flex w-screen">
      <div className="flex items-center shadow-[0_1px_4px_rgba(0,0,0,0.1)] w-full pl-2">
        <div className="w-[60vw] lg:w-[25vw]  ">
          <Branding />
        </div>
        <div
          className="hidden lg:flex justify-center px-2
        relative right-4 lg:ml-[12vw] xl:ml-[15vw] 2xl:ml-[15vw]"
        >
          <Menu />
        </div>
        <div className="lg:flex hidden absolute right-4 ">
          <BarEnd />
        </div>
        <div className="ml-auto mr-2">
          <DropdownMenu />
        </div>
      </div>
      {/* <div className="flex justify-center lg:hidden m-2">
        <Menu />
      </div> */}
    </div>
  );
};

export default TopBar;
