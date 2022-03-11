import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../components/Category";
import ContinueWatching from "../components/ContinueWatching";
import Header from "../components/Header";
import SecondaryNav from "../components/SecondaryNav";
import { fetchMovies } from "../redux/features/MoviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  useEffect(() => {
    if (!movies) dispatch(fetchMovies());
  }, []);
  return (
    <>
      <SecondaryNav />
      <Header />
      <ContinueWatching />
      {movies &&
        movies.map((category) => (
          <Category category={category} key={category.name} />
        ))}
    </>
  );
};

export default Movies;
