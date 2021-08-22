import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styleM.css";
import GameList from "./API.js";
import GameItem from "./GameItem";
import Header from "./Header";
import Welcom from "./companent/Welcom.jsx";

function App() {
  return (
    <main className="Mani">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Welcom />

              <GameList/>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
