import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import ContinueWatching from "../components/ContinueWatching";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SecondaryNav from "../components/SecondaryNav";
import { fetchSeries } from "../redux/features/SeriesSlice";

const Series = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.series.shows);
  const status = useSelector((state) => state.series.status);
  useEffect(() => {
    if (!shows) dispatch(fetchSeries());
  }, []);
  return (
    <>
      <SecondaryNav />
      <Header />
      <ContinueWatching />
      {status !== "idle" && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {shows &&
        shows.map((category) => (
          <Category category={category} key={category.name} />
        ))}
      <Footer />
    </>
  );
};

export default Series;
