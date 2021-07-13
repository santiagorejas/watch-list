import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import FavIcon from "../components/UI/FavIcon";
import WatchedIcon from "../components/UI/WatchedIcon";
import FavoritesWatchedContext from "../store/favorites-watched-context";
import classes from "./MovieDetailPage.module.css";

const MovieDetailPage = () => {
  const movieId = +useParams().movieId;
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setContent(data);
      setIsLoading(false);
    };

    fetchData();
  }, movieId);

  const {
    isFav,
    wasWatched,
    addFavorite,
    removeFavorite,
    addWatched,
    removeWatched,
  } = useContext(FavoritesWatchedContext);

  console.log("re rendering!!!");

  const fav = isFav(movieId);
  const watched = wasWatched(movieId);

  if (!isLoading) {
    const title = content.title ? content.title : content.name;
    const backgroundStyle = {
      backgroundImage: `linear-gradient(to bottom, rgba(2, 23, 42, 0.6), rgba(2, 23, 42, 1)), url(https://image.tmdb.org/t/p/original${content.backdrop_path})`,
    };
    const img = `https://image.tmdb.org/t/p/w500${content.poster_path}`;

    const onFavHandler = () => {
      !fav ? addFavorite(movieId) : removeFavorite(movieId);
    };

    const onWatchedHandler = () => {
      !watched ? addWatched(movieId) : removeWatched(movieId);
    };

    return (
      <div className={classes["movie-detail"]}>
        <div className={classes["movie-detail-header"]} style={backgroundStyle}>
          <div className={classes["movie-poster-container"]}>
            <img className={classes["movie-poster"]} src={img} />
            <FavIcon
              onClick={onFavHandler}
              fav={fav}
              className={`${classes["btn"]} ${classes["fav-icon"]}`}
            />
            <WatchedIcon
              onClick={onWatchedHandler}
              watched={watched}
              className={`${classes["btn"]} ${classes["watched-icon"]}`}
            />
          </div>
          <div className={classes["header-content"]}>
            <h1 className={classes["movie-title"]}>{title}</h1>
            <ul className={classes["movie-main-info"]}>
              <li>
                <h3>Release Date</h3>
                <p>Release date</p>
              </li>
              <li>
                <h3>Genres</h3>
                <p>Crimen, Drama, Misterio, Suspense</p>
              </li>
              <li>
                <h3>Duration</h3>
                <p>1h 47m</p>
              </li>
              <li>
                <h3>Original Language</h3>
                <p>EN</p>
              </li>
              <li>
                <h3>Director</h3>
                <p>Chinchu LIN</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.overview}>
          <h2>Overview</h2>
          <p>{content.overview}</p>
        </div>
        <div className={classes.cast}>
          <h2>Cast</h2>
          <div></div>
        </div>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default MovieDetailPage;
