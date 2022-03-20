import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import SecondaryNav from "../components/SecondaryNav";
import ContinueWatching from "../components/ContinueWatching";
import Header from "../components/Header";
import { getAnimes } from "../redux/features/AnimeSlice";
import Footer from "../components/Footer";

const Animes = () => {
  const dispatch = useDispatch();
  const animes = useSelector((state) => state.anime.animes);
  const status = useSelector((state) => state.anime.status);
  useEffect(() => {
    if (!animes) dispatch(getAnimes());
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
      {animes &&
        animes.map((category) => (
          <Category category={category} key={category.name} />
        ))}
      <Footer />
    </>
  );
};

export default Animes;
