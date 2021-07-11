import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";
import FavoritesWatchedProvider from "./store/FavoritesWatchedProvider";

function App() {
  return (
    <>
      <NavBar />
      <FavoritesWatchedProvider>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </FavoritesWatchedProvider>
    </>
  );
}

export default App;
