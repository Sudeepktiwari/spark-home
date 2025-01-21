import { Button } from "../ui/button";

const Menu = () => {
  return (
    <div className="space-x-6">
      <Button
        variant={"ghost"}
        className="bg-transparent text-lg p-0 hover:border-0 border-0 hover:bg-transparent focus:outline-none"
      >
        Home
      </Button>
      <Button
        variant={"ghost"}
        className="bg-transparent text-lg p-0 hover:border-0 border-0 hover:bg-transparent focus:outline-none"
      >
        About Us
      </Button>
      <Button
        variant={"ghost"}
        className="bg-transparent text-lg p-0 hover:border-0 border-0 hover:bg-transparent focus:outline-none"
      >
        Pricing
      </Button>
      <Button
        variant={"ghost"}
        className="bg-transparent text-lg p-0 hover:border-0 border-0 hover:bg-transparent focus:outline-none"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default Menu;
