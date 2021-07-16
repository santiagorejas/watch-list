import { useState } from "react";
import classes from "./BurgerBtn.module.css";

const BurgerBtn = (props) => {
  return (
    <button
      className={`${classes["burger-menu__show-btn"]} ${props.className}`}
      onClick={props.onClick}
    >
      {props.open ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-bars"></i>
      )}
    </button>
  );
};

export default BurgerBtn;
