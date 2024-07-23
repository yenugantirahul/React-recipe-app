import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Sidebar from "./components/Sidebar";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
        <Route path="/favorites" element={<FavoritePage />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
