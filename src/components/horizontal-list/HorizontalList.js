import { useEffect, useState, useRef } from "react";
import HorizontalCard from "./HorizontalCard";
import classes from "./HorizontalList.module.css";
import SlideButton from "./SlideButton";
import Spinner from "../UI/Spinner";
import { useContext } from "react";
import FavoritesWatchedContext from "../../store/favorites-watched-context";

const HorizontalList = (props) => {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { url } = props;

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      let contentList = [];
      data.results.forEach((cont) => {
        contentList.push(cont);
      });
      setContent(contentList);
      setIsLoading(false);
    };

    fetchData(url);
  }, [url]);

  const cardContainerWrapperRef = useRef();
  const favWatchedCtx = useContext(FavoritesWatchedContext);

  if (isLoading) {
    return (
      <div className={classes["vertical-container"]}>
        <h1 className={classes.title}>{props.title}</h1>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes["vertical-container"]}>
      <div
        ref={cardContainerWrapperRef}
        className={classes["content-container-wrapper"]}
      >
        <div className={classes["content-container"]}>
          {content.map((cont) => {
            return (
              <HorizontalCard
                key={cont.id}
                content={cont}
                watched={favWatchedCtx.watched.includes(cont.id)}
                onAddFav={favWatchedCtx.addFavorite}
                onRemoveFav={favWatchedCtx.removeFavorite}
                onAddWatched={favWatchedCtx.addWatched}
                onRemoveWatched={favWatchedCtx.removeWatched}
                fav={favWatchedCtx.favorites.includes(cont.id)}
              />
            );
          })}
        </div>
      </div>
      <SlideButton
        containerRef={cardContainerWrapperRef}
        position={"left"}
        scrollLimit={190}
      />
      <SlideButton
        containerRef={cardContainerWrapperRef}
        position="right"
        scrollLimit={190}
      />
    </div>
  );
};

export default HorizontalList;
