import classes from "./BurgerMenu.module.css";

const BurgerMenu = (props) => {
  return (
    <button className={`${classes["burger-menu"]} ${props.className}`}>
      <i class="fas fa-bars"></i>
    </button>
  );
};

export default BurgerMenu;
