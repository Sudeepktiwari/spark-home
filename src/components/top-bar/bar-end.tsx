import { Button } from "../ui/button";

const BarEnd = () => {
  return (
    <div className="flex flex-col lg:flex-row py-2 lg:py-0 px-4 lg:px-0 space-y-4 lg:space-y-0 lg:space-x-2">
      <Button className="bg-[#5555ff] rounded-full hover:bg-white hover:text-black">
        Login
      </Button>
      <Button variant={"outline"} className="border-[#5555ff] rounded-full">
        Sign up
      </Button>
    </div>
  );
};

export default BarEnd;
