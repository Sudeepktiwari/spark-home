import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
const Steps = () => {
  return (
    <div className="bg-white ">
      <h1 className="text-center text-5xl p-10" style={{ fontWeight: 300 }}>
        Build Your Custom Chatbot in 3 Simple Steps
      </h1>
      <div className="flex flex-col lg:flex-row items-center m-10 gap-0 lg:gap-20 ">
        <div className="space-y-[15px] lg:w-[30vw]">
          <div className="flex lg:hidden">
            <Skeleton className="h-[30vh] w-[90vw]" />
          </div>
          <div className="flex items-center gap-2 mt-6 lg:mt-0">
            {/* <NumberCircleOne size={40} className="text-gray-500" /> */}
            <img src={t1} alt="1" className="h-16 w-16" />
            <Button
              variant={"outline"}
              className=" text-xl py-4 rounded-full w-[60vw] lg:w-[20vw] border-gray-500 hover:bg-white"
              style={{ fontWeight: 300 }}
            >
              Add Data Sources
            </Button>
          </div>
          <p className="text-justify">
            Start by creating your knowledge base. Upload files, input text, or
            link a website to provide your chatbot with relevant information.
          </p>
          <div className="flex items-center gap-2 mt-6">
            {/* <NumberCircleTwo size={40} className="text-gray-500" /> */}
            <img src={t2} alt="1" className="h-16 w-16" />
            <Button
              variant={"outline"}
              className=" text-xl py-4 rounded-full w-[60vw] lg:w-[20vw] border-gray-500 hover:bg-white"
              style={{ fontWeight: 300 }}
            >
              Create Your Chatbot
            </Button>
          </div>

          <p>
            Configure your AI chatbot’s personality. Choose from available
            personas—like a Sales Assistant or Support Agent—and personalize its
            name.
          </p>
          <div className="flex items-center gap-2 mt-6">
            {/* <NumberCircleThree size={40} className="text-gray-500" /> */}
            <img src={t3} alt="1" className="h-16 w-16" />

            <Button
              variant={"outline"}
              className=" text-xl py-4 rounded-full w-[60vw] lg:w-[20vw]  border-gray-500 hover:bg-white"
              style={{ fontWeight: 300 }}
            >
              Experience & Integrate
            </Button>
          </div>
          <h3></h3>
          <p>
            Interact with your chatbot by asking questions and rating responses.
            Then, get the integration code to easily add it to your website.
          </p>
        </div>
        <div className="hidden lg:flex">
          <Skeleton className="h-[80vh] w-[60vw]" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
