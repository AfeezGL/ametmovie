import React from "react";
import star from "../images/star.svg";

const Category = ({ category }) => {
  return (
    <div className="category">
      <div className="category-header">
        <p>{category.name}</p>
        <span>see all</span>
      </div>

      <div className="cards">
        {category.animes.map((anime) => (
          <figure className="card" key={anime.id}>
            <img src={anime.data.imgUrl} alt="movie screenshot" />
            <figcaption className="white">{anime.data.title}</figcaption>
            <div className="ratings">
              <img src={star} alt="Star icon" />
              <span>{anime.data.rating}</span>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Category;
