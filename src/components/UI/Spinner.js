import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return <div className={`${classes.spinner} ${props.className}`}></div>;
};

export default Spinner;
