import { useRef } from "react";
import classes from "./CastList.module.css";
import SlideButton from "../UI/SlideButton";
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
        <SlideButton containerRef={castRef} right={false} scrollLimit={190} />
        <SlideButton containerRef={castRef} right={true} scrollLimit={190} />
      </div>
    );
  }

  return <p>Loading</p>;
};

export default CastList;
