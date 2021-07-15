import classes from "./CastCard.module.css";
import imageNotFound from "../../resources/img/image-not-found.jpg";

const CastCard = (props) => {
  let img = imageNotFound;

  if (props.imgPath) {
    img = `https://image.tmdb.org/t/p/w500${props.imgPath}`;
  }

  return (
    <div className={`${classes["cast-card"]} ${props.className}`}>
      <img src={img} />
      <h1>{props.name}</h1>
    </div>
  );
};

export default CastCard;
