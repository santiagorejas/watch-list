import classes from "./TMDB.module.css";
import tmdbLogo from "../../resources/svg/tmdb-logo.svg";

const TMDB = (props) => {
  return (
    <div className={classes["tmdb"]}>
      <a href="https://www.themoviedb.org/" target="_blank">
        <img src={tmdbLogo} />
      </a>
      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
    </div>
  );
};

export default TMDB;
