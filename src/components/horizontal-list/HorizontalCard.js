import classes from "./HorizontalCard.module.css";
import React from "react";
import { useHistory } from "react-router";

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

  const img = `https://image.tmdb.org/t/p/w500${content.poster_path}`;
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
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img onClick={clickMovieHandler} src={img} />
        <i
          className={classes["fav-icon"] + " fas fa-heart"}
          onClick={onFavHandler}
          style={favColor}
        ></i>
        <i
          className={`${classes["watched-icon"]} far fa-eye${
            watched ? "-slash" : ""
          }`}
          onClick={onWatchedHandler}
        ></i>

        <p>{content.vote_average}</p>
      </div>
      <h1 className={classes.title}>{trimmedTitle}</h1>
      <h2 className={classes["release-date"]}>{content.release_data}</h2>
    </div>
  );
};

export default MediaCard;
