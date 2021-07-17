import { useState, useEffect, useContext } from "react";
import classes from "./VerticalList.module.css";
import VerticalCard from "./VerticalCard";
import FavoritesWatchedContext from "../../store/favorites-watched-context";
import Spinner from "../UI/Spinner";
import NoMovies from "../UI/NoMovies";

const VerticalCardContainer = (props) => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { moviesId } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const contentList = [];

      await Promise.all(
        moviesId.map(async (movId) => {
          const url = `https://api.themoviedb.org/3/movie/${movId}?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US`;
          const response = await fetch(url);
          const data = await response.json();
          contentList.push(data);
        })
      ).then(() => setIsLoading(false));

      setContent(contentList);
    };

    fetchData();
  }, [moviesId]);

  const favWatchedCtx = useContext(FavoritesWatchedContext);

  if (isLoading) {
    return <Spinner className="spinner" />;
  }

  if (content.length === 0) {
    return (
      <NoMovies
        className={classes["no-movies"]}
        message="No movies were found"
      />
    );
  }

  return (
    <div className={classes["vertical-card-container"]}>
      {content.map((cont) => {
        return (
          <VerticalCard
            key={cont.id}
            content={cont}
            onAddFav={favWatchedCtx.addFavorite}
            onRemoveFav={favWatchedCtx.removeFavorite}
            onAddWatched={favWatchedCtx.addWatched}
            onRemoveWatched={favWatchedCtx.removeWatched}
            watched={favWatchedCtx.wasWatched(cont.id)}
            fav={favWatchedCtx.isFav(cont.id)}
          />
        );
      })}
    </div>
  );
};

export default VerticalCardContainer;
