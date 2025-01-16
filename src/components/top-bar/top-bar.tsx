import Branding from "./branding";
import Menu from "./menu";
import BarEnd from "./bar-end";

const TopBar = () => {
  return (
    <div className="flex flex-col bg-white w-screen shadow-sm p-1 lg:p-2">
      <div className="flex justify-between items-center px-2 ">
        <div>
          <Branding />
        </div>
        <div className="justify-center hidden lg:flex">
          <Menu />
        </div>
        <div className="flex justify-end">
          <BarEnd />
        </div>
      </div>
      <div className="flex justify-center lg:hidden m-2">
        <Menu />
      </div>
    </div>
  );
};

export default TopBar;
