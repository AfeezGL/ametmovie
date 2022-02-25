import { Route, Routes } from "react-router-dom";
import Animes from "./Animes";

const HomeScreen = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/animes" element={<Animes />} />
      </Routes>
    </div>
  );
};

export default HomeScreen;
