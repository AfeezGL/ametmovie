import { Navigate, Route, Routes } from "react-router-dom";
import Animes from "../pages/Animes";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import WatchScreen from "./WatchScreen";

const Layout = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/animes" element={<Animes />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/watch/:videoId" element={<WatchScreen />} />
        <Route path="/" element={<Navigate to={"/animes"} />} />
        <Route path="*" element={<Navigate to={"/animes"} />} />
      </Routes>
    </main>
  );
};

export default Layout;
