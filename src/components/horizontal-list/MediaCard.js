import classes from "./MediaCard.module.css";
import { useState } from "react";

const MediaCard = (props) => {
  const { content } = props;
  const title = content.title ? content.title : content.name;

  const img = `https://image.tmdb.org/t/p/w500${content.poster_path}`;
  const favs = window.localStorage.getItem("fav");
  const [fav, setFav] = useState(false);
  const favColor = {
    color: fav ? "red" : "#ccc",
  };

  const onFavHandler = () => {
    setFav((prev) => !prev);
    console.log("Hola mundo!");
  };

  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img src={img} />
        <i onClick={onFavHandler} class="fas fa-heart" style={favColor}></i>
        <p>{content.vote_average}</p>
      </div>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes["release-date"]}>{content.release_data}</h2>
    </div>
  );
};

export default MediaCard;
