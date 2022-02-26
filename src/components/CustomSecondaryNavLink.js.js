import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomSecondaryNavLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{
        color: match ? "#fff" : "#9696a3",
      }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomSecondaryNavLink;
