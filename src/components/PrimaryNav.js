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
import CustomPrimaryNavLink from "./CustomPrimaryNavLink";

const PrimaryNav = () => {
  return (
    <nav
      className="nav"
      role={"navigation"}
      aria-roledescription="primary"
      aria-label="Primary"
    >
      <div className="brand">
        <img src={logo} alt="Amet Logo" />
      </div>
      <div className="menu">
        <p>MENU</p>
        <ul>
          <li>
            <CustomPrimaryNavLink to={"/animes"}>
              <img src={home} alt="home icon" />
              <p>Home</p>
            </CustomPrimaryNavLink>
          </li>
          <li>
            <CustomPrimaryNavLink to={"/watchlist"}>
              <img src={heart} alt="heart icon" />
              <p>Watchlist</p>
            </CustomPrimaryNavLink>
          </li>
          <li>
            <CustomPrimaryNavLink to={"/discover"}>
              <img src={compass} alt="Compass icon" />
              <p>Discovery</p>
            </CustomPrimaryNavLink>
          </li>
          <li>
            <CustomPrimaryNavLink to={"/upcoming"}>
              <img src={clock} alt="Clock icon" />
              <p>Coming soon</p>
            </CustomPrimaryNavLink>
          </li>
        </ul>
      </div>
      <div className="social">
        <p>SOCIAL</p>
        <ul>
          <li>
            <CustomPrimaryNavLink to={"/friends"}>
              <img src={user} alt="User icon" />
              <p>Friends</p>
            </CustomPrimaryNavLink>
          </li>
          <li>
            <CustomPrimaryNavLink to={"/parties"}>
              <img src={users} alt="Users icon" />
              <p>Parties</p>
            </CustomPrimaryNavLink>
          </li>
        </ul>
      </div>
      <div className="general">
        <p>GENERAL</p>
        <ul>
          <li>
            <CustomPrimaryNavLink to={"/settings"}>
              <img src={settings} alt="Settings icon" />
              <p>Settings</p>
            </CustomPrimaryNavLink>
          </li>
          <li>
            <CustomPrimaryNavLink to={"/logout"}>
              <img src={login} alt="Login icon" />
              <p>Logout</p>
            </CustomPrimaryNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PrimaryNav;
