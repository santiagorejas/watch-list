import React from "react";

const FavoritesWatchedContext = React.createContext({
  favorites: [],
  watched: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  addWatched: (id) => {},
  removeWatched: (id) => {},
});

export default FavoritesWatchedContext;
