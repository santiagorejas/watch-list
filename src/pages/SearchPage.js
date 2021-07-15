import { Redirect, useHistory, useLocation } from "react-router-dom";
import classes from "./SearchPage.module.css";
import { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
import HorizontalCard from "../components/horizontal-list/HorizontalCard";
import SearchBar from "../components/search/SearchBar";

const SearchPage = (props) => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const history = useHistory();
  const url = `https://api.themoviedb.org/3/search/movie?api_key=b61e1b3719a9ee56423ad6e473cbf2ab&language=en-US&page=1&query=${queryParams.get(
    "name"
  )}`;

  const { isLoading, error, sendRequest } = useHttp();
  useEffect(() => {
    sendRequest(
      {
        url: url,
      },
      (data) => {
        let moviesList = [];
        data.results.forEach((movie) => {
          moviesList.push(movie);
        });
        setMovies(moviesList);
      }
    );
  }, [url]);

  const onSearchHandler = (inputValue) => {
    history.push({
      pathname: location.pathname,
      search: `?name=${inputValue}`,
    });
  };

  return (
    <div className={`${classes["search"]} section`}>
      <SearchBar
        className={classes["search__search-bar"]}
        onSearch={onSearchHandler}
      />
      <div className={classes["search__movies-container"]}>
        {movies.map((movie) => {
          return <HorizontalCard content={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchPage;
