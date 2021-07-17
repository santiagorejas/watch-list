import { useRef } from "react";
import classes from "./CastList.module.css";
import SlideButton from "../horizontal-list/SlideButton";
import CastCard from "./CastCard";

const CastList = (props) => {
  const cast = props.credits;

  const castRef = useRef();

  if (cast) {
    return (
      <div className={`${classes.cast} ${props.className}`}>
        <h2>The Cast</h2>
        <div className={classes["cast__card-container"]} ref={castRef}>
          {cast.map((actor) => {
            return (
              <CastCard
                name={actor.name}
                imgPath={actor.profile_path}
                className={classes["cast__card"]}
              />
            );
          })}
        </div>
        <SlideButton
          containerRef={castRef}
          position={"right"}
          scrollLimit={250}
          className={classes["cast-list__slide-btn"]}
        />
        <SlideButton
          containerRef={castRef}
          position={"left"}
          scrollLimit={250}
          className={classes["cast-list__slide-btn"]}
        />
      </div>
    );
  }

  return <p>Loading</p>;
};

export default CastList;
