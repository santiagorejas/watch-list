import classes from "./NoMovies.module.css";

const NoMovies = (props) => {
  return (
    <div className={`${classes["no-movies"]} ${props.className}`}>
      <i className="fas fa-ticket-alt"></i>
      <p className={classes["no-movies__message"]}>{props.message}</p>
    </div>
  );
};

export default NoMovies;
