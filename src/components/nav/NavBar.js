import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import Logo from "../UI/Logo";
import { useState } from "react";
import { useHistory } from "react-router";
import SearchBtn from "../UI/SearchBtn";
import BurgerBtn from "./BurgerBtn";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const history = useHistory();

  const onLogoClickHandler = () => {
    history.push("/");
  };

  const onBurgerBtnClick = () => {
    setShowSideBar((prev) => !prev);
  };

  const onCloseSideBar = () => {
    setShowSideBar(false);
    console.log("CLOSE SIDE BAR");
  };

  return (
    <header>
      <nav className={classes["nav-bar"]}>
        <div className={classes["nav-bar__links-container"]}>
          <Logo
            className={classes["nav-bar__logo"]}
            onClick={onLogoClickHandler}
          />
          <NavLinks className={classes["nav-bar__links"]} />
        </div>

        <SearchBtn className={classes.magnifier} />
        <BurgerBtn
          className={classes["nav-bar__burger-btn"]}
          onClick={onBurgerBtnClick}
          open={showSideBar}
        />
        <BurgerMenu open={showSideBar} onClose={onCloseSideBar} />
      </nav>
    </header>
  );
};

export default NavBar;
