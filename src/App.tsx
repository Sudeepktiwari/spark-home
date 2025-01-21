import TopBar from "./components/top-bar/top-bar";
import Homepage from "./pages/home/homepage";
import { useEffect } from "react";
import logo from "./assets/logo.png";

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = logo; // Replace with your icon path

      document.title = "Spark Agent AI";
    }
  }, []);
  // bg - [#fef9f3];
  return (
    <div
      className=" w-[100vw] min-h-screenflex flex-col bg-gradient-to-r from-[#E0F4FF] to-white "
      style={{ fontFamily: "sans-serif" }}
    >
      <TopBar />
      <Homepage />
    </div>
  );
}

export default App;
