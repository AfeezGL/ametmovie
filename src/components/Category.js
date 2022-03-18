import React, { useRef } from "react";
import { Link } from "react-router-dom";
import star from "../images/star.svg";

const Category = ({ category }) => {
  const dialogRef = useRef();

  return (
    <div className="category">
      <div className="category-header">
        <p>{category.name}</p>
        <button
          onClick={() => {
            dialogRef.current.showModal();
          }}
        >
          see all
        </button>
      </div>

      <div className="cards">
        {category.movies.map((movie) => (
          <Link to={`/watch/${movie.data.videoId}`} key={movie.id}>
            <figure className="card">
              <img src={movie.data.imgUrl} alt="movie screenshot" />
              <figcaption className="white">{movie.data.title}</figcaption>
              <div className="ratings">
                <img src={star} alt="Star icon" />
                <span>{movie.data.rating}</span>
              </div>
            </figure>
          </Link>
        ))}
      </div>

      <dialog ref={dialogRef}>
        <header>
          <button
            onClick={() => {
              dialogRef.current.close();
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </header>

        {category.movies.map((movie) => (
          <Link to={`/watch/${movie.data.videoId}`} key={movie.id}>
            <div className="popup-item">
              <img src={movie.data.imgUrl} alt="movie screenshot" />
              <div>
                <h4 className="white">{movie.data.title}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, optio!
                </p>
                <div className="ratings">
                  <img src={star} alt="Star icon" />
                  <span>{movie.data.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </dialog>
    </div>
  );
};

export default Category;
