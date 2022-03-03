import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import star from "../images/star.svg";
import { setCurrentlyPlaying } from "../redux/features/CurrentlyPlayingSlice";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <div className="category">
      <div className="category-header">
        <p>{category.name}</p>
        <span>see all</span>
      </div>

      <div className="cards">
        {category.animes.map((anime) => (
          <Link
            to={`/watch/${anime.id}`}
            key={anime.id}
            onClick={() => dispatch(setCurrentlyPlaying(anime.data.title))}
          >
            <figure className="card">
              <img src={anime.data.imgUrl} alt="movie screenshot" />
              <figcaption className="white">{anime.data.title}</figcaption>
              <div className="ratings">
                <img src={star} alt="Star icon" />
                <span>{anime.data.rating}</span>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
