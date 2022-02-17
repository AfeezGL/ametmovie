import React from "react";

const ContinueWatching = () => {
  return (
    <div className="continue-watching">
      <p className="white">Continue Watching</p>
      <div className="continue-watching-cards">
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/bfee47988f21484dbbd3efbaf3127a73.jpeg?alt=media&token=c13a2ae1-b027-42f4-8eef-996e255a389a"
            alt="movie screenshot"
          />
          <progress value={32} max={100} />
          <figcaption className="white">Naruto</figcaption>
        </figure>
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/bfee47988f21484dbbd3efbaf3127a73.jpeg?alt=media&token=c13a2ae1-b027-42f4-8eef-996e255a389a"
            alt="movie screenshot"
          />
          <progress value={32} max={100} />
          <figcaption className="white">Attack on titan</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ContinueWatching;
