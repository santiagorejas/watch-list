import classes from "./HorizontalCard.module.css";
import React from "react";
import { useHistory } from "react-router";
import imgNotFound from "../../resources/img/image-not-found.jpg";

const MediaCard = (props) => {
  const {
    content,
    fav,
    watched,
    onAddFav,
    onRemoveFav,
    onAddWatched,
    onRemoveWatched,
  } = props;

  const originalTitle = content.title ? content.title : content.name;
  const trimmedTitle =
    originalTitle.length > 25
      ? originalTitle.substr(0, 25) + "..."
      : originalTitle;

  const img = content.poster_path
    ? `https://image.tmdb.org/t/p/w500${content.poster_path}`
    : imgNotFound;
  const favColor = {
    color: fav ? "red" : "#ccc",
  };

  const onFavHandler = () => {
    !fav ? onAddFav(content.id) : onRemoveFav(content.id);
  };

  const onWatchedHandler = () => {
    !watched ? onAddWatched(content.id) : onRemoveWatched(content.id);
  };

  const history = useHistory();

  const clickMovieHandler = () => {
    history.push(`/movies/${content.id}`);
  };

  return (
    <div className={`${classes.card} ${props.className}`}>
      <div className={classes["card__img-container"]}>
        <img onClick={clickMovieHandler} src={img} />
        <div className={classes["card__icons-container"]}>
          <i
            className={classes["card__fav-icon"] + " fas fa-heart"}
            onClick={onFavHandler}
            style={favColor}
          ></i>
          <i
            className={`${classes["card__watched-icon"]} far fa-eye${
              watched ? "-slash" : ""
            }`}
            onClick={onWatchedHandler}
          ></i>
        </div>

        <p>{content.vote_average}</p>
      </div>
      <h1 className={classes["card__title"]}>{trimmedTitle}</h1>
    </div>
  );
};

export default MediaCard;
