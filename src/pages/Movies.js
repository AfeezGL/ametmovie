import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import ContinueWatching from "../components/ContinueWatching";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SecondaryNav from "../components/SecondaryNav";
import { fetchMovies } from "../redux/features/MoviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const status = useSelector((state) => state.movie.status);
  useEffect(() => {
    if (!movies) dispatch(fetchMovies());
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
      {movies &&
        movies.map((category) => (
          <Category category={category} key={category.name} />
        ))}
      <Footer />
    </>
  );
};

export default Movies;
