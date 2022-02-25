import { Link } from "react-router-dom";

const CenterNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/series"}>TV Series</Link>
        </li>
        <li>
          <Link to={"/movies"}>Movies</Link>
        </li>
        <li className="active">
          <Link to={"/animes"}>Animes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CenterNav;
