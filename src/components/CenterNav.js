import CustomLink from "./CustomLink";

const CenterNav = () => {
  return (
    <nav role={"navigation"} aria-roledescription="secondary">
      <ul>
        <li>
          <CustomLink to={"/series"}>TV Series</CustomLink>
        </li>
        <li>
          <CustomLink to={"/movies"}>Movies</CustomLink>
        </li>
        <li className="active">
          <CustomLink to={"/animes"}>Animes</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default CenterNav;
