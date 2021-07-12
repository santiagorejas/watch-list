import { useEffect, useState, useContext } from "react";
import VerticalList from "../components/vertical-list/VerticalList";
import FavoritesWatchedContext from "../store/favorites-watched-context";
import classes from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favWatchedCtx = useContext(FavoritesWatchedContext);

  return (
    <>
      <VerticalList moviesId={favWatchedCtx.favorites} />
    </>
  );
};

export default FavoritesPage;
