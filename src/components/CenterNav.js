import CustomSecondaryNavLink from "./CustomSecondaryNavLink.js";

const CenterNav = () => {
  return (
    <nav role={"navigation"} aria-roledescription="secondary">
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
