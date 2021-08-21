import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styleM.css";
<<<<<<< HEAD:src/App.js
import img from "./imge/icon.png";
import whatsapp from "./imge/whatsapp.png";
import vk from "./imge/vk.png";
import insta from "./imge/insta.png";
import welcom from "./imge/welcom.jpg";
import GameList from "./API.js";
=======

import GameList from "./API.jsx";
>>>>>>> 3c2887acfc9841d7f485af4a85d3b5bb4680f1d9:src/App.jsx
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
