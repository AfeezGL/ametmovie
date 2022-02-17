import React from "react";
import plusIcon from "../images/plus.svg";

const Friends = () => {
  return (
    <div className="friends">
      <div className="add-friend">
        <img src={plusIcon} alt="add friend icon" />
      </div>
      <figure className="friend">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/079c0ac6d647e8a60c179080b1a4d917.png?alt=media&token=4d5c2fad-40f9-4980-b636-10d1f324e5fd"
          alt="friend's profile picture"
        />
      </figure>
      <figure className="friend">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/23b9dd838bf810f67ebd8e4bb37403a1.png?alt=media&token=8ba6b040-0f13-4a45-91bf-c0217b291dbb"
          alt="friend's profile picture"
        />
      </figure>
      <figure className="friend">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/3f0d5e8899976001c256237794d56b46.png?alt=media&token=9798ffd7-331c-4bc2-8b31-1fa5e960b15b"
          alt="friend's profile picture"
        />
      </figure>
      <figure className="friend">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/4885cc8d3b9d4df5ba0c5aedcd1430c1.png?alt=media&token=1ea4e37d-f633-4615-9149-3dd894ec8039"
          alt="friend's profile picture"
        />
      </figure>
      <figure className="friend">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/8d5bf9606149bd9f0895a93e6edb3560.png?alt=media&token=b2ee9862-031e-4fa7-8c8d-b629df566933"
          alt="friend's profile picture"
        />
      </figure>
      <figure className="friend">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/80cb0b7d9277af93e123b597961e6e73.png?alt=media&token=b6c9ed47-4385-4e84-a0ef-219705bb694a"
          alt="friend's profile picture"
        />
      </figure>
    </div>
  );
};

export default Friends;
