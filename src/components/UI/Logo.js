import camera from "../../resources/svg/camera.svg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div
      className={`${classes.logo} ${props.className} `}
      onClick={props.onClick}
    >
      <img src={camera} />
      <h1>WatchList</h1>
    </div>
  );
};

export default Logo;
