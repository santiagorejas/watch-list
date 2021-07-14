import { useState, useContext, useEffect, useRef } from "react";
import classes from "./InfiniteList.module.css";
import HorizontalCard from "../horizontal-list/HorizontalCard";
import FavoritesWatchedContext from "../../store/favorites-watched-context";
import SlideButton from "../horizontal-list/SlideButton";
import useHttp from "../../hooks/use-http";

const InfiniteList = (props) => {
  const [content, setContent] = useState([]);
  const cardContainerWrapperRef = useRef();

  const favWatchedCtx = useContext(FavoritesWatchedContext);

  const { isLoading, error, sendRequest } = useHttp();

  const { url } = props;

  useEffect(() => {
    sendRequest(
      {
        url: url,
      },
      (data) => {
        let contentList = [];
        data.results.forEach((cont) => {
          contentList.push(cont);
        });
        setContent((prev) => [...prev, ...contentList]);
      }
    );
  }, [url]);

  const onScrollHandler = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop <= clientHeight + 200) {
      console.log("FETCHING NEW MOVIES");
      props.onScrollLimit();
    }
  };

  return (
    <div className={`${classes["infinite-list"]} main-container`}>
      <div
        className={classes["card-container"]}
        ref={cardContainerWrapperRef}
        onScroll={onScrollHandler}
      >
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
      <SlideButton
        containerRef={cardContainerWrapperRef}
        position="up"
        scrollLimit={350}
      />
      <SlideButton
        containerRef={cardContainerWrapperRef}
        position="down"
        scrollLimit={350}
      />
    </div>
  );
};

export default InfiniteList;
