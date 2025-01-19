import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Customization = () => {
  return (
    <div className="lg:flex p-4 lg:pt-24 gap-16 lg:mr-2">
      <Skeleton className="lg:h-[80vh] lg:w-[70vw] w-[90vw] h-[30vh] md:h-[90vh] my-10 lg:my-0 " />
      <div className="space-y-8 m-0 lg:mx-4 lg:w-[30vw] ">
        <Button
          variant={"outline"}
          className=" lg:w-[25vw] text-xl 2xl:text-2xl font-light rounded-full border-gray-500 hover:bg-white"
        >
          Brand Customization
        </Button>
        <p className="text-justify 2xl:text-2xl">
          Customize the chatbot's appearance to match your brand, including
          color themes and personalized messaging that reflects your brand
          values.
        </p>
      </div>
    </div>
  );
};

export default Customization;
