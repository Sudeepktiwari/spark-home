import CardComponent from "@/components/card-component";
import { AlarmClockMinus, ImageUpscale, Smile } from "lucide-react";

const Benefits = () => {
  return (
    <div className="mt-8 space-y-4">
      <p className="flex text-5xl justify-center font-light">
        Deliver Value on day one
      </p>
      <p className="flex justify-center text-2xl">
        Enhance Customer Engagement with Our Cutting-Edge Capabilities
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-8 !mt-12">
        <CardComponent
          title="Boost Customer Satisfaction"
          content="Deliver instant, 24/7 support with AI-powered chat that answers, and resolves customer issues efficiently. SparkAgentAI ensures happier customers and improved retention by being always available."
          icon={<Smile size={50} />}
        />
        <CardComponent
          title="Reduce Response Times"
          content="Automate responses to repetitive queries, allowing your support team to focus on complex issues. This leads to shorter wait times, faster resolutions, and a more efficient support experience."
          icon={<AlarmClockMinus size={50} />}
        />
        <CardComponent
          title="Cost Efficiency and Scalability"
          content="Scale your customer service effortlessly without hiring additional support staff. SparkAgentAI adapts to your business needs, providing consistent, high-quality support without increasing costs."
          icon={<ImageUpscale size={50} />}
        />
      </div>
    </div>
  );
};

export default Benefits;
