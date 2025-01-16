import { Button } from "../ui/button";

const BarEnd = () => {
  return (
    <div className="space-x-2">
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
