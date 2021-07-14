import { useEffect, useState } from "react";
import HorizontalList from "../components/horizontal-list/HorizontalList";
import InfiniteList from "../components/infinite-list/InfiniteList";
import Spinner from "../components/UI/Spinner";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [nowPlayingPage, setNowPlayingPage] = useState(1);

  const onScrollLimitHandler = () => {
    setNowPlayingPage((prev) => prev + 1);
  };

  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=${nowPlayingPage}`;

  return (
    <div className={`${classes.homepage} box-shadow-bg bor-rad-bg`}>
      <h1 className={classes["section-title"]}>Titulo de la sección</h1>
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/trending/all/day?api_key=b61e1b3719a9ee56423ad6e473cbf2ab"
        }
      />
      <h1 className={classes["section-title"]}>Titulo de la sección</h1>
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=1"
        }
      />
      <h1 className={classes["section-title"]}> Titulo de la sección</h1>
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=2"
        }
      />
      <h1 className={classes["section-title"]}>Titulo de la sección</h1>
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=3"
        }
      />
      <h1 className={classes["section-title"]}>Titulo de la sección</h1>
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=4"
        }
      />
      <h1 className={classes["section-title"]}>Titulo de la sección</h1>
      <InfiniteList url={nowPlayingUrl} onScrollLimit={onScrollLimitHandler} />
    </div>
  );
};

export default HomePage;
