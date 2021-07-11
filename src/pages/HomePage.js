import { useEffect } from "react";
import HorizontalList from "../components/horizontal-list/HorizontalList";
import Spinner from "../components/UI/Spinner";

const HomePage = () => {
  const url =
    "https://api.themoviedb.org/3/trending/all/day?api_key=b61e1b3719a9ee56423ad6e473cbf2ab";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [url]);

  return (
    <>
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/trending/all/day?api_key=b61e1b3719a9ee56423ad6e473cbf2ab"
        }
        title={"Trending movies"}
      />
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=1"
        }
        title={"Trending movies"}
      />
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=2"
        }
        title={"Trending movies"}
      />
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=3"
        }
        title={"Trending movies"}
      />
      <HorizontalList
        url={
          "https://api.themoviedb.org/3/movie/top_rated?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=4"
        }
        title={"Trending movies"}
      />
    </>
  );
};

export default HomePage;
