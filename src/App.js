import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
