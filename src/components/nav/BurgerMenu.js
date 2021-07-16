import classes from "./BurgerMenu.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import Logo from "../UI/Logo";
import NavLinks from "./NavLinks";
import SearchBar from "../search/SearchBar";

const BurgerMenu = (props) => {
  const history = useHistory();

  const onSearchHandler = (inputValue) => {
    history.push({
      pathname: "search",
      search: `?name=${inputValue}`,
    });
    props.onClose();
  };

  const showStyle = !props.open
    ? {
        transform: "translateX(-100%)",
      }
    : {};

  return (
    <div className={classes["burger-menu"]} style={showStyle}>
      <SearchBar
        className={classes["burger-menu__search-bar"]}
        onSearch={onSearchHandler}
      />
      <NavLinks
        className={classes["burger-menu__links"]}
        onLinkClick={props.onClose}
      />
    </div>
  );
};

export default BurgerMenu;
