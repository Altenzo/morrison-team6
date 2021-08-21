import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styleM.css";

import GameList from "./API.jsx";
import GameItem from "./GameItem";
import Header from "./Header";
import Welcom from "./companent/Welcom.jsx";

function App() {
  return (
    <div className="Mani">
      <div className="container">
        <BrowserRouter>
          <Switch>
         <Header />
          <Welcom />
          </Switch> 
        </BrowserRouter>
      </div>
    </div>
  );  
}

export default App;
