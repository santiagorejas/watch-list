import { useContext } from "react";
import VerticalList from "../components/vertical-list/VerticalList";
import FavoritesWatchedContext from "../store/favorites-watched-context";

const FavoritesPage = () => {
  const favWatchedCtx = useContext(FavoritesWatchedContext);

  return (
    <>
      <VerticalList moviesId={favWatchedCtx.watched} />
    </>
  );
};

export default FavoritesPage;
