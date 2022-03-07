import CustomSecondaryNavLink from "./CustomSecondaryNavLink.js";
import logo from "../images/logo.svg";

const CenterNav = () => {
  return (
    <nav
      role={"navigation"}
      aria-roledescription="secondary"
      aria-label="Secondary"
    >
      <img src={logo} alt="Amet logo" />
      <ul>
        <li>
          <CustomSecondaryNavLink to={"/series"}>
            TV Series
          </CustomSecondaryNavLink>
        </li>
        <li>
          <CustomSecondaryNavLink to={"/movies"}>Movies</CustomSecondaryNavLink>
        </li>
        <li className="active">
          <CustomSecondaryNavLink to={"/animes"}>Animes</CustomSecondaryNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CenterNav;
