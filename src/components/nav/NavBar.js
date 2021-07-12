import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header>
      <nav className={classes["nav-bar"]}>
        <ul>
          <li>
            <i class="fas fa-home"></i>
            <NavLink className={classes["nav-bar-link"]} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <i class="fas fa-film"></i>
            <NavLink className={classes["nav-bar-link"]} to="/movies">
              Movies
            </NavLink>
          </li>
          <li>
            <i class="fas fa-heart"></i>
            <NavLink className={classes["nav-bar-link"]} to="/favorites">
              Favorites
            </NavLink>
          </li>
          <li>
            <i class="fas fa-eye"></i>
            <NavLink className={classes["nav-bar-link"]} to="/watched">
              Watched
            </NavLink>
          </li>
          <li>
            <i class="fas fa-info-circle"></i>
            <NavLink className={classes["nav-bar-link"]} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
