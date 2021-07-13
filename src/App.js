import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";
import FavoritesWatchedProvider from "./store/FavoritesWatchedProvider";
import FavoritesPage from "./pages/FavoritesPage";
import WatchedPage from "./pages/WatchedPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
      <NavBar />
      <FavoritesWatchedProvider>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>
          <Route path="/watched" exact>
            <WatchedPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailPage />
          </Route>
        </Switch>
      </FavoritesWatchedProvider>
    </>
  );
}

export default App;
