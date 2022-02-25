import { Navigate, Route, Routes } from "react-router-dom";
import Animes from "./Animes";
import Movies from "./Movies";
import Series from "./Series";

const HomeScreen = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/animes" element={<Animes />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/" element={<Navigate to={"/animes"} />} />
        <Route path="*" element={<Navigate to={"/animes"} />} />
      </Routes>
    </div>
  );
};

export default HomeScreen;
