import React from "react";
import logo from "../images/logo.svg";
import Category from "./Category";
import ContinueWatching from "./ContinueWatching";
const HomeScreen = () => {
  return (
    <>
      <div className="brand">
        <img src={logo} alt="Amet Logo" />
      </div>
      <main>
        <nav>
          <ul>
            <li>TV Series</li>
            <li>Movies</li>
            <li className="active">Animes</li>
          </ul>
        </nav>
        <header>
          <div
            className="header-card"
            style={{
              backgroundImage:
                "url(https://firebasestorage.googleapis.com/v0/b/ametmovie.appspot.com/o/onepunchman.jpeg?alt=media&token=bfd56d7e-46e0-45f2-937c-d081292e9c58)",
            }}
          ></div>
        </header>
        <Category />
        <ContinueWatching />
      </main>
    </>
  );
};

export default HomeScreen;
