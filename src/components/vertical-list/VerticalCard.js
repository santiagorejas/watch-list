import FavIcon from "../UI/FavIcon";
import WatchedIcon from "../UI/WatchedIcon";
import classes from "./VerticalCard.module.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const VerticalCard = (props) => {
  const {
    fav,
    watched,
    content,
    onAddFav,
    onRemoveFav,
    onAddWatched,
    onRemoveWatched,
  } = props;

  const history = useHistory();
  const title = content.title ? content.title : content.name;
  const img = `https://image.tmdb.org/t/p/w500${content.backdrop_path}`;

  const onFavHandler = () => {
    !fav ? onAddFav(content.id) : onRemoveFav(content.id);
  };

  const onWatchedHandler = () => {
    !watched ? onAddWatched(content.id) : onRemoveWatched(content.id);
  };

  const onImgClickHandler = () => {
    history.push(`/movies/${content.id}`);
  };

  return (
    <div className={classes["vertical-card"]}>
      <div className={classes["vertical-card__img-container"]}>
        <img
          className={classes["vertical-card__img"]}
          src={img}
          onClick={onImgClickHandler}
        />
        <div className={classes["vertical-card__bottom"]}>
          <p className={classes["vertical-card__rate"]}>
            {content.vote_average}
          </p>
          <FavIcon
            onClick={onFavHandler}
            fav={fav}
            className={classes["vertical-card__btn"]}
          />
          <WatchedIcon
            onClick={onWatchedHandler}
            watched={watched}
            className={classes["vertical-card__btn"]}
          />
        </div>
      </div>
      <h1 className={classes["vertical-card__title"]}>{title}</h1>
      <ul className={classes["vertical-card__info"]}>
        <li>
          <h3>Release Date</h3>
          <p>{content.release_date}</p>
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
  );
};

export default VerticalCard;
