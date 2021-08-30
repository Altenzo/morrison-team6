import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styleM.css";

import Header from "./Header";
import Welcom from "./companent/Welcom.jsx";
import Popular from "./companent/popular";
import GameList from "./API";
import Info from "./ID/info";
import Footer from "./footer";
import Login from "./companent/login";

function App() {
  return (
    <main className="Mani">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Welcom />
              <Popular />
              <GameList />
            </Route>

            <Route path ="/login">
                <Login/>
            </Route>

            <Route path="/info/:id">
              <Info />
            </Route>

          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
