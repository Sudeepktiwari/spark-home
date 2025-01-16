import TopBar from "./components/top-bar/top-bar";
import Homepage from "./pages/home/homepage";

function App() {
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
