import TopBar from "./components/top-bar/top-bar";
import Homepage from "./pages/home/homepage";
import { useEffect } from "react";
import logo from "./assets/logo.png";

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = logo; // Replace with your icon path

      document.title = "Home - My Custom App";
    }
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div>
        <TopBar />
      </div>
      <div className="p-2">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
