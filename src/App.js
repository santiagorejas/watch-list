import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";
import FavoritesProvider from "./store/FavoritesProvider";

function App() {
  return (
    <>
      <NavBar />
      <FavoritesProvider>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </FavoritesProvider>
    </>
  );
}

export default App;
