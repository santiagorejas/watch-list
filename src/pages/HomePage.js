import { useEffect, useState } from "react";
import HorizontalList from "../components/horizontal-list/HorizontalList";
import InfiniteList from "../components/infinite-list/InfiniteList";
import HomeSearch from "../components/search/HomeSearch";
import TMDB from "../components/UI/TMDB";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [nowPlayingPage, setNowPlayingPage] = useState(1);

  const onScrollLimitHandler = () => {
    setNowPlayingPage((prev) => prev + 1);
  };

  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=${nowPlayingPage}`;

  return (
    <div className={`${classes.homepage}`}>
      <HomeSearch className={`${classes["homepage__search"]}`} />
      <div className={`${classes["homepage__sections"]} section`}>
        <div className={`${classes["homepage__section"]}`}>
          <h1 className={classes["homepage__section-title"]}>Popular</h1>
          <HorizontalList
            url={
              "https://api.themoviedb.org/3/movie/popular?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=2"
            }
          />
        </div>
        <div className={`{$classes['homepage__section]}`}>
          <h1 className={classes["homepage__section-title"]}>Trending</h1>
          <HorizontalList
            url={
              "https://api.themoviedb.org/3/trending/all/day?api_key=b61e1b3719a9ee56423ad6e473cbf2ab"
            }
          />
        </div>
        <div className={classes["homepage__section"]}>
          <h1 className={classes["homepage__section-title"]}>Top Rated</h1>
          <HorizontalList
            url={
              "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=1"
            }
          />
        </div>

        <div className={`$classes['homepage__section]`}>
          <h1 className={classes["homepage__section-title"]}>Now Playing</h1>
          <InfiniteList
            url={nowPlayingUrl}
            onScrollLimit={onScrollLimitHandler}
          />
        </div>
      </div>
      <TMDB />
    </div>
  );
};

export default HomePage;
