import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styleM.css";
import img from "./imge/icon.png";
import whatsapp from "./imge/whatsapp.png";
import vk from "./imge/vk.png";
import insta from "./imge/insta.png";
import welcom from "./imge/welcom.jpg";
import GameList from "./API.js";
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
