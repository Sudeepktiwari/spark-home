import { Button } from "../ui/button";

const Menu = () => {
  return (
    <div className="space-x-6">
      <Button variant={"ghost"} className="bg-white  text-lg p-0">
        Home
      </Button>
      <Button variant={"ghost"} className="bg-white  text-lg p-0">
        About Us
      </Button>
      <Button variant={"ghost"} className="bg-white  text-lg p-0">
        Pricing
      </Button>
      <Button variant={"ghost"} className="bg-white  text-lg p-0">
        Contact Us
      </Button>
    </div>
  );
};

export default Menu;
