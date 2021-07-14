import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import Logo from "../UI/Logo";
import { useHistory } from "react-router";
import SearchBtn from "../UI/SearchBtn";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
  const history = useHistory();

  const onLogoClickHandler = () => {
    history.push("/");
  };

  return (
    <header>
      <nav className={classes["nav-bar"]}>
        <div className={classes["left-nav-bar"]}>
          <Logo className={classes.logo} onClick={onLogoClickHandler} />
          <ul>
            <li>
              <i class="fas fa-home"></i>
              <NavLink className={classes["nav-bar-link"]} to="/">
                Home
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
              <i class="fab fa-github"></i>
              <a
                className={classes["nav-bar-link"]}
                to="/about"
                href={"https://github.com/santiagorejas/watch-list"}
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <SearchBtn className={classes.magnifier} />
        <BurgerMenu className={classes["burger-menu"]} />
      </nav>
    </header>
  );
};

export default NavBar;
