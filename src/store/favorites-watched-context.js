import React from "react";

const FavoritesWatchedContext = React.createContext({
  favorites: [],
  watched: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  isFav: (id) => {},
  addWatched: (id) => {},
  removeWatched: (id) => {},
  wasWatched: (id) => {},
});

export default FavoritesWatchedContext;
