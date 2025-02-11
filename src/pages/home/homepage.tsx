import Reviews from "@/components/review/reviews";
import Trusted from "../trustedby/trustedby";
import Benefits from "./Benefits/benefits";
import ScrollingBanner from "./features-bar1";

// import FeaturesBar from "./features-bar";
import Features from "./Features/features";
// import Footer from "./footer";
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
      <ScrollingBanner />
      <Trusted />
      <Steps />
      <Features />
      <Benefits />
      <Reviews />
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;
