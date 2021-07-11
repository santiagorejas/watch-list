import classes from "./MediaCard.module.css";
import React, { useState } from "react";

const MediaCard = (props) => {
  const { content } = props;

  const [fav, setFav] = useState(props.fav);
  const [watched, setWatched] = useState(props.watched);

  const title = content.title ? content.title : content.name;

  const img = `https://image.tmdb.org/t/p/w500${content.poster_path}`;
  const favColor = {
    color: fav ? "red" : "#ccc",
  };

  const onFavHandler = () => {
    setFav((prev) => !prev);
    !fav ? props.onAddFav(content.id) : props.onRemoveFav(content.id);
  };

  const onWatchedHandler = () => {
    setWatched((prev) => !prev);
    !watched
      ? props.onAddWatched(content.id)
      : props.onRemoveWatched(content.id);
  };

  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img src={img} />
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
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes["release-date"]}>{content.release_data}</h2>
    </div>
  );
};

export default React.memo(MediaCard);
