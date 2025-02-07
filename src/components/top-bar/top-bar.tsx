import Branding from "./branding";
import Menu from "./menu";
import BarEnd from "./bar-end";
import DropdownMenu from "./dropdown-menu";
// bg - [#ffefcb];
const TopBar = () => {
  return (
    <div className="flex bg-black">
      <div className="flex items-center w-full">
        <div className="w-[80vw] lg:w-[25vw] text-white pl-4 pb-2">
          <Branding />
        </div>
        <div
          // lg:ml-[12vw] xl:ml-[15vw] 2xl:ml-[15vw]
          className="hidden lg:flex ml-20 text-white"
        >
          <Menu />
        </div>
        <div className="lg:flex hidden absolute right-4 ">
          <BarEnd />
        </div>
        <div className=" ">
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
