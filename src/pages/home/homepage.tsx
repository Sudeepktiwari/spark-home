import FeaturesBar from "./features-bar";
import Intro from "./Intro";
import Steps from "./steps";

const Homepage = () => {
  return (
    <div className="">
      <div className="">
        <Intro />
      </div>
      <div className="">
        <FeaturesBar />
      </div>
      <Steps />
    </div>
  );
};

export default Homepage;
