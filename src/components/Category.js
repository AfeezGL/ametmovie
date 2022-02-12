import React from "react";

const Category = () => {
  return (
    <section className="category">
      <div className="category-header">
        <p>Category Name</p>
        <span>see all</span>
      </div>

      <div className="cards">
        <figure className="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/6c93e37845a0db2051acbf47ca168d09.jpeg?alt=media&token=95a2b378-4ec2-43e1-95c2-e82e53e2c372"
            alt="movie image"
          />
          <figcaption className="white">Movie title</figcaption>
          <span className="ratings">8.9</span>
        </figure>
        <figure className="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/6c93e37845a0db2051acbf47ca168d09.jpeg?alt=media&token=95a2b378-4ec2-43e1-95c2-e82e53e2c372"
            alt="movie image"
          />
          <figcaption className="white">Movie title</figcaption>
          <span className="ratings">8.9</span>
        </figure>
      </div>
    </section>
  );
};

export default Category;
