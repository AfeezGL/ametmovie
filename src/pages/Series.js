import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import ContinueWatching from "../components/ContinueWatching";
import Header from "../components/Header";
import SecondaryNav from "../components/SecondaryNav";
import { fetchSeries } from "../redux/features/SeriesSlice";

const Series = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.series.shows);
  useEffect(() => {
    if (!shows) dispatch(fetchSeries());
  }, []);
  return (
    <>
      <SecondaryNav />
      <Header />
      <ContinueWatching />
      {shows &&
        shows.map((category) => (
          <Category category={category} key={category.name} />
        ))}
    </>
  );
};

export default Series;
