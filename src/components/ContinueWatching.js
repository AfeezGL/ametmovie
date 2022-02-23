import React from "react";
import { useSelector } from "react-redux";

const ContinueWatching = () => {
  const movies = useSelector((state) => state.continueWatching.movies);
  return (
    <div className="continue-watching">
      <p className="white">Continue Watching</p>
      <div className="continue-watching-cards">
        {movies &&
          movies.map((movie) => (
            <figure key={movie.id}>
              <img src={movie.data.imgUrl} alt="movie screenshot" />
              <progress value={movie.data.progress} max={100} />
              <figcaption className="white">{movie.data.title}</figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
