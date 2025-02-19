import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import { useEffect } from "react";
import logo from "./assets/logo.png";
import TopBar from "./components/top-bar/top-bar";
import Footer from "./components/footer/footer";

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
  </div>
);

// Lazy load pages with fallback loader
const Homepage = loadable(() => import("./pages/home/homepage"), {
  fallback: <LoadingSpinner />,
});
const FAQPage = loadable(() => import("./pages/faq/faqpage"), {
  fallback: <LoadingSpinner />,
});

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = logo;
    }
    document.title = "Spark Agent AI";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Forces scroll to top on reload
  }, []);
  return (
    <div
      className="main-body select-none"
      style={{ fontFamily: "Trebuchet MS" }}
      // style={{ fontFamily: "Manrope,sans-serif" }}
    >
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
