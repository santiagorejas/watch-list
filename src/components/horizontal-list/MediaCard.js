import classes from "./MediaCard.module.css";
import { useState } from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MediaCard = (props) => {
  const { content } = props;
  const title = content.title ? content.title : content.name;

  const favsCtx = useContext(FavoritesContext);

  const img = `https://image.tmdb.org/t/p/w500${content.poster_path}`;
  const [fav, setFav] = useState(favsCtx.favorites.includes(content.id));
  const favColor = {
    color: fav ? "red" : "#ccc",
  };

  const onFavHandler = () => {
    setFav((prev) => !prev);
    favsCtx.addFavorite(content.id);
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
