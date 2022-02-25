import plus from "../images/plus.svg";

const Header = () => {
  return (
    <header>
      <button className="left-arrow">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div
        className="header-card"
        style={{
          backgroundImage:
            "url(https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/onepunchman.jpeg?alt=media&token=bfd56d7e-46e0-45f2-937c-d081292e9c58)",
        }}
      >
        <div className="details">
          <div className="friends-watching">
            <div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/079c0ac6d647e8a60c179080b1a4d917.png?alt=media&token=4d5c2fad-40f9-4980-b636-10d1f324e5fd"
                alt="friend's profile picture"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/23b9dd838bf810f67ebd8e4bb37403a1.png?alt=media&token=8ba6b040-0f13-4a45-91bf-c0217b291dbb"
                alt="friend's profile picture"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/3f0d5e8899976001c256237794d56b46.png?alt=media&token=9798ffd7-331c-4bc2-8b31-1fa5e960b15b"
                alt="friend's profile picture"
              />
            </div>
            <p> + 5 friends are currently watching</p>
          </div>

          <div className="title-and-duration">
            <h1 className="white">one punch man</h1>
            <div>
              <p className="match">95% match</p>
              <p className="duration">2 seasons</p>
            </div>
          </div>
          <div className="watch-buttons">
            <button className="play white">Watch</button>
            <button className="add">
              <img src={plus} alt="Plus icon" />
            </button>
          </div>
        </div>
      </div>
      <button className="right-arrow">
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </header>
  );
};

export default Header;
