import { useState } from "react";
import { useEffect } from "react";
import FavoritesContex from "./favorites-context";

const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(window.localStorage.getItem("favorites")));
    }
  }, []);

  const addFavorites = (id) => {
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFavorites = (id) => {
    const newFavorites = favorites.filter((fav) => fav.id != id);
    setFavorites(newFavorites);
    newFavorites
      ? window.localStorage.setItem("favorites", JSON.stringify(newFavorites))
      : window.localStorage.removeItem("favorites");
  };

  return (
    <FavoritesContex.Provider
      value={{
        favorites: favorites,
        addFavorite: addFavorites,
        removeFavorites: removeFavorites,
      }}
    >
      {props.children}
    </FavoritesContex.Provider>
  );
};

export default FavoritesProvider;
