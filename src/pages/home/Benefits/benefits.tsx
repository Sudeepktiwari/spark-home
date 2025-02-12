import CardComponent from "@/components/card-component";
import {
  AlarmClockMinus,
  Blocks,
  ImageUpscale,
  LibraryBig,
  MailCheck,
  Smile,
} from "lucide-react";

const Benefits = () => {
  return (
    <div className="pt-28 lg:space-y-4 px-4 mr-2">
      <p className="flex text-2xl lg:text-5xl justify-center font-light">
        Deliver <span className=" text-orange-500 mx-4"> Value </span> on day
        one
      </p>
      <p className="flex justify-center text-center lg:text-2xl">
        Enhance Customer Engagement with Our Cutting-Edge Capabilities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:ml-4 !mt-5">
        <CardComponent
          title="Boost Customer Satisfaction"
          content="Deliver instant, 24/7 support with AI-powered chat that answers, 
          and resolves customer issues efficiently. SparkAgentAI ensures happier 
          customers and improved retention by being always available."
          icon={<Smile size={70} strokeWidth={1} />}
        />
        <CardComponent
          title="Reduce Response Times"
          content="Automate responses to repetitive queries, allowing your 
          support team to focus on complex issues. This leads to shorter wait times, 
          faster resolutions, and a more efficient support experience."
          icon={<AlarmClockMinus size={70} strokeWidth={1} />}
        />
        <CardComponent
          title="Cost Efficiency and Scalability"
          content="Scale your customer service effortlessly without hiring 
          additional support staff. SparkAgentAI adapts to your business needs, 
          providing consistent, high-quality support without increasing costs."
          icon={<ImageUpscale size={70} strokeWidth={1} />}
        />
        <CardComponent
          title="Improve Conversion Rates"
          content="Leverage AI-driven insights from customer interactions to 
          refine your content strategy and engagement approach. This data-driven 
          personalization results in higher conversion rates and loyal customers."
          icon={<MailCheck size={70} strokeWidth={1} />}
        />
        <CardComponent
          title="Continuous Learning and Adaptation"
          content="SparkAgentAI evolves with every interaction, learning from 
          customer behaviors to provide increasingly accurate and relevant responses, 
          ensuring an ever-improving support experience."
          icon={<LibraryBig size={70} strokeWidth={1} />}
        />
        <CardComponent
          title="Seamless Multi-Channel Engagement"
          content="Connect with customers across web, mobile, and social platforms effortlessly. 
          Ensure a consistent and personalized experience, meeting customers where they are, anytime."
          icon={<Blocks size={70} strokeWidth={1} />}
        />
      </div>
    </div>
  );
};

export default Benefits;
