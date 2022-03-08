import { Navigate, Route, Routes } from "react-router-dom";
import Animes from "./Animes";
import Movies from "./Movies";
import Series from "./Series";
import WatchScreen from "./WatchScreen";

const HomeScreen = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/animes" element={<Animes />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/watch/:movieId" element={<WatchScreen />} />
        <Route
          path="/watch/:movieId/:percentageSeen"
          element={<WatchScreen />}
        />
        <Route path="/" element={<Navigate to={"/animes"} />} />
        <Route path="*" element={<Navigate to={"/animes"} />} />
      </Routes>
    </main>
  );
};

export default HomeScreen;
