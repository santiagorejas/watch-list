import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className={`${classes["nav-links"]} ${props.className}`}>
      <li>
        <NavLink
          className={classes["nav-links__link"]}
          to="/"
          onClick={props.onLinkClick}
        >
          <i className="fas fa-home"></i>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes["nav-links__link"]}
          to="/favorites"
          onClick={props.onLinkClick}
        >
          <i className="fas fa-heart"></i>
          Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classes["nav-links__link"]}
          to="/watched"
          onClick={props.onLinkClick}
        >
          <i className="fas fa-eye"></i>
          Watched
        </NavLink>
      </li>
      <li>
        <a
          className={classes["nav-links__link"]}
          to="/about"
          href={"https://github.com/santiagorejas/watch-list"}
          target="_blank"
          onClick={props.onLinkClick}
        >
          <i className="fab fa-github"></i>
          GitHub
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
