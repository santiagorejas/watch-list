import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";
import FavoritesWatchedProvider from "./store/FavoritesWatchedProvider";
import React, { Suspense } from "react";
import Spinner from "./components/UI/Spinner";

const FavoritesPage = React.lazy(() => import("./pages/FavoritesPage"));
const WatchedPage = React.lazy(() => import("./pages/WatchedPage"));
const MovieDetailsPage = React.lazy(() => import("./pages/MovieDetailsPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
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
          <Route path="/movies/:movieId" exact>
            <MovieDetailsPage />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
        </Switch>
      </FavoritesWatchedProvider>
    </Suspense>
  );
}

export default App;
