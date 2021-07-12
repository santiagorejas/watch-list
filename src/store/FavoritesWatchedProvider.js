import { useState } from "react";
import { useEffect } from "react";
import FavoritesWatchedContext from "./favorites-watched-context";

const FavoritesWatchedProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(window.localStorage.getItem("favorites")));
    }
    if (window.localStorage.getItem("watched")) {
      setWatched(JSON.parse(window.localStorage.getItem("watched")));
    }
  }, []);

  const addFavorite = (id) => {
    const newFavorites = [...favorites, id];
    setFavorites((prev) => [...prev, id]);
    window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((favId) => favId !== id);
    setFavorites((prev) => prev.filter((favId) => favId !== id));
    newFavorites.length > 0
      ? window.localStorage.setItem("favorites", JSON.stringify(newFavorites))
      : window.localStorage.removeItem("favorites");
  };

  const isFav = (id) => {
    return favorites.includes(id);
  };

  const addWatched = (id) => {
    const newWatched = [...watched, id];
    setWatched(newWatched);
    window.localStorage.setItem("watched", JSON.stringify(newWatched));
  };

  const removeWatched = (id) => {
    const newWatched = watched.filter((watchedId) => watchedId !== id);
    setWatched(newWatched);
    newWatched
      ? window.localStorage.setItem("watched", JSON.stringify(newWatched))
      : window.localStorage.removeItem("watched");
  };

  const wasWatched = (id) => {
    return watched.includes(id);
  };

  return (
    <FavoritesWatchedContext.Provider
      value={{
        favorites: favorites,
        watched: watched,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        isFav: isFav,
        addWatched: addWatched,
        removeWatched: removeWatched,
        wasWatched: wasWatched,
      }}
    >
      {props.children}
    </FavoritesWatchedContext.Provider>
  );
};

export default FavoritesWatchedProvider;
