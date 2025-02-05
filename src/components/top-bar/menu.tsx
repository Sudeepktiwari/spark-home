import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="space-x-12 lg:pl-4 ">
      <Button
        variant={"ghost"}
        className="bg-transparent p-0 text-[14px] leading-5 hover:border-0 border-0 hover:bg-transparent
        hover:text-white focus:outline-none"
      >
        Home
      </Button>
      <Button
        variant={"ghost"}
        className="bg-transparent text-[14px] leading-5 p-0 hover:border-0 border-0 hover:bg-transparent
        hover:text-white focus:outline-none"
      >
        Features
      </Button>
      <Button
        variant={"ghost"}
        className="bg-transparent text-[14px] leading-5 p-0 hover:border-0 border-0 hover:bg-transparent
        hover:text-white focus:outline-none"
      >
        Security
      </Button>
      <Button
        variant={"ghost"}
        className="bg-transparent text-[14px] leading-5 p-0 hover:border-0 border-0 hover:bg-transparent
        hover:text-white focus:outline-none"
      >
        Resources
      </Button>
      <Button
        variant={"ghost"}
        className="bg-transparent text-[14px] leading-5 p-0 hover:border-0 border-0 hover:bg-transparent
        hover:text-white focus:outline-none"
      >
        Contact Us
      </Button>
      <Button
        variant="ghost"
        className="bg-transparent text-[14px] leading-5 p-0 hover:border-0 border-0 hover:bg-transparent
        hover:text-white focus:outline-none"
        onClick={() => navigate("/faq")}
      >
        FAQ
      </Button>
    </div>
  );
};

export default Menu;
