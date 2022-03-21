import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import plus from "../images/plus.svg";

const Header = () => {
  const trendingMovies = useSelector((state) => state.trending.movies);
  const scrollContainer = useRef();

  // scroll the header cards to the to reveal more trending movies
  const scrollRight = () => {
    scrollContainer.current.scrollLeft += scrollContainer.current.clientWidth;
  };

  // scroll header cards to the left to reveal previous trending movies
  const scrollLeft = () => {
    scrollContainer.current.scrollLeft -= scrollContainer.current.clientWidth;
  };

  return (
    <header role={"banner"}>
      <button className="left-arrow" onClick={scrollLeft}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="scroll-container" ref={scrollContainer}>
        {trendingMovies &&
          trendingMovies.map((movie) => (
            <div
              className="header-card"
              style={{
                backgroundImage: `url(${movie.data.image})`,
              }}
              key={movie.id}
            >
              <div className="details">
                <div className="friends-watching">
                  <div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/079c0ac6d647e8a60c179080b1a4d917.png?alt=media&token=4d5c2fad-40f9-4980-b636-10d1f324e5fd"
                      alt="friend's profile"
                    />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/23b9dd838bf810f67ebd8e4bb37403a1.png?alt=media&token=8ba6b040-0f13-4a45-91bf-c0217b291dbb"
                      alt="friend's profile"
                    />
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/3f0d5e8899976001c256237794d56b46.png?alt=media&token=9798ffd7-331c-4bc2-8b31-1fa5e960b15b"
                      alt="friend's profile"
                    />
                  </div>
                  <p> + 5 friends are currently watching</p>
                </div>

                <div className="title-and-duration">
                  <h1 className="white">{movie.data.title}</h1>
                  <div>
                    <p className="match">{`${movie.data.match} match`}</p>
                    <p className="duration">{movie.data.duration}</p>
                  </div>
                </div>
                <div className="watch-buttons">
                  <Link
                    to={`/watch/${movie.data.videoId}`}
                    className="play white"
                  >
                    Watch
                  </Link>
                  <button className="add">
                    <img src={plus} alt="Plus icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button className="right-arrow" onClick={scrollRight}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </header>
  );
};

export default Header;
