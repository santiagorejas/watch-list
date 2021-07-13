import classes from "./CastCard.module.css";
import imageNotFound from "../../resources/img/image-not-found.jpg";

const CastCard = (props) => {
  let img = imageNotFound;

  if (props.imgPath) {
    img = `https://image.tmdb.org/t/p/w500${props.imgPath}`;
  }

  return (
    <div className={classes["cast-card"]}>
      {<img className={classes["actor-img"]} src={img} />}
      <h2 className={classes["actor-name"]}>{props.name}</h2>
    </div>
  );
};

export default CastCard;
