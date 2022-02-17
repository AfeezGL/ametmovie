import React from "react";
import logo from "../images/logo.svg";
import home from "../images/home.svg";
import heart from "../images/heart.svg";
import compass from "../images/compass.svg";
import clock from "../images/clock.svg";
import user from "../images/user.svg";
import users from "../images/users.svg";
import settings from "../images/settings.svg";
import login from "../images/log-in.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="brand">
        <img src={logo} alt="Amet Logo" />
      </div>
      <div className="menu">
        <p>MENU</p>
        <ul>
          <li className="current-page">
            <img src={home} alt="home icon" />
            <p>Home</p>
          </li>
          <li>
            <img src={heart} alt="heart icon" />
            <p>Watchlist</p>
          </li>
          <li>
            <img src={compass} alt="Compass icon" />
            <p>Discovery</p>
          </li>
          <li>
            <img src={clock} alt="Clock icon" />
            <p>Coming soon</p>
          </li>
        </ul>
      </div>
      <div className="social">
        <p>SOCIAL</p>
        <ul>
          <li>
            <img src={user} alt="User icon" />
            <p>Friends</p>
          </li>
          <li>
            <img src={users} alt="Users icon" />
            <p>Parties</p>
          </li>
        </ul>
      </div>
      <div className="general">
        <p>GENERAL</p>
        <ul>
          <li>
            <img src={settings} alt="Settings icon" />
            <p>Settings</p>
          </li>
          <li>
            <img src={login} alt="Login icon" />
            <p>Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
