import { Button } from "../ui/button";

const Menu = () => {
  return (
    <div className="space-x-6">
      <Button
        variant={"ghost"}
        className="bg-[#ffefcb] text-lg p-0 hover:border-0 border-0 hover:bg-[#ffefcb] focus:outline-none"
      >
        Home
      </Button>
      <Button
        variant={"ghost"}
        className="bg-[#ffefcb] text-lg p-0 hover:border-0 border-0 hover:bg-[#ffefcb] focus:outline-none"
      >
        About Us
      </Button>
      <Button
        variant={"ghost"}
        className="bg-[#ffefcb] text-lg p-0 hover:border-0 border-0 hover:bg-[#ffefcb] focus:outline-none"
      >
        Pricing
      </Button>
      <Button
        variant={"ghost"}
        className="bg-[#ffefcb] text-lg p-0 hover:border-0 border-0 hover:bg-[#ffefcb] focus:outline-none"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default Menu;
