import { useState, useEffect, useRef } from "react";
import classes from "./CastList.module.css";
import SlideButton from "../UI/SlideButton";
import CastCard from "./CastCard";

const CastList = (props) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = props;

  const castRef = useRef();

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      const fetchedCast = data.cast.filter(
        (cast) => cast.known_for_department === "Acting"
      );
      setCast(fetchedCast);
      setIsLoading(false);
      console.log(fetchedCast);
    };
    fetchCast();
  }, [movieId]);

  if (!isLoading) {
    return (
      <div className={`${classes.cast} ${props.className}`}>
        <h2>The Cast</h2>
        <div className={classes["cast-card-container"]} ref={castRef}>
          {cast.map((actor) => {
            return <CastCard name={actor.name} imgPath={actor.profile_path} />;
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
