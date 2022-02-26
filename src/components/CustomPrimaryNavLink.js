import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomPrimaryNavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} className={match && "current-page"} {...props}>
      {children}
    </Link>
  );
};

export default CustomPrimaryNavLink;
