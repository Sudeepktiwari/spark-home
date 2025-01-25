import Trusted from "../trustedby/trustedby";
import Benefits from "./Benefits/benefits";
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
      {/* <div>
        <FeaturesBar />
      </div> */}
      <Trusted />
      <Steps />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Homepage;
