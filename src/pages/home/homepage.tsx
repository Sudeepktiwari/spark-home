import FeaturesBar from "./features-bar";
import Features from "./Features/features";
import Footer from "./footer";
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
      <Features />
      <Footer />
    </div>
  );
};

export default Homepage;
