import FeaturesBar from "./features-bar";
import Intro from "./Intro";

const Homepage = () => {
  return (
    <div>
      <Intro />
      <div className="absolute overflow-hidden w-[100vw]">
        <FeaturesBar />
      </div>
    </div>
  );
};

export default Homepage;
