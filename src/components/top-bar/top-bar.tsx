import Branding from "./branding";
import Menu from "./menu";
import BarEnd from "./bar-end";
import DropdownMenu from "./dropdown-menu";
// bg - [#ffefcb];
const TopBar = () => {
  return (
    <div className="flex">
      <div className="flex items-center w-full">
        <div className="w-[60vw] lg:w-[25vw]  ">
          <Branding />
        </div>
        <div
          className="hidden lg:flex justify-center 
        relative right-4 lg:ml-[12vw] xl:ml-[15vw] 2xl:ml-[15vw]"
        >
          <Menu />
        </div>
        <div className="lg:flex hidden absolute right-4 ">
          <BarEnd />
        </div>
        <div className="ml-auto ">
          <DropdownMenu />
        </div>
      </div>
      {/* <div className="flex justify-center lg:hidden">
        <Menu />
      </div> */}
    </div>
  );
};

export default TopBar;
