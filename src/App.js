import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NavBar from "./components/nav/NavBar";
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
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Suspense>
    );
}

export default App;
