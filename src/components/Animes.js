import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./Category";
import SecondaryNav from "./SecondaryNav";
import ContinueWatching from "./ContinueWatching";
import Header from "./Header";
import { getAnimes } from "../redux/features/AnimeSlice";

const Animes = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.anime.animes);
  useEffect(() => {
    if (!animes) dispatch(getAnimes());
  }, []);
  return (
    <>
      <CenterNav />
      <Header />
      <ContinueWatching />
      {animes &&
        animes.map((category) => (
          <Category category={category} key={category.name} />
        ))}
    </>
  );
};

export default Animes;
