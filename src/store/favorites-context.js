import React from "react";

const FavoritesContext = React.createContext({
  favorites: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default FavoritesContext;
