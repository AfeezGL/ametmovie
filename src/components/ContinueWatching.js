import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ContinueWatching = () => {
  const movies = useSelector((state) => state.continueWatching.movies);
  return (
    <div className="continue-watching">
      <p className="white">Continue Watching</p>
      <div className="continue-watching-cards">
        {movies &&
          movies.map((movie) => (
            <Link
              to={`/watch/${movie.id}/${movie.data.progress}`}
              key={movie.id}
            >
              <figure>
                <img src={movie.data.imgUrl} alt="movie screenshot" />
                <progress value={movie.data.progress} max={100} />
                <figcaption className="white">{movie.data.title}</figcaption>
              </figure>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
