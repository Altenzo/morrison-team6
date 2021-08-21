import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import imge from "./imge/logo.png";
import "./styleM.css";
import img from "./imge/icon.png";
import whatsapp from "./imge/whatsapp.png";
import vk from "./imge/vk.png";
import insta from "./imge/insta.png";
import welcom from "./imge/welcom.jpg";
import GameList from "./API.js";
import GameItem from "./GameItem";

function App() {
  return (
    <div className="Mani">
      <div className="container">
        <BrowserRouter>
          <header>
            <div className="headerList">
              <div className="logo">
                <img src={imge} alt="" />
              </div>

              <div className="headerText">
                <div className="glav">
                  <Link>
                    <p>Главная</p>
                  </Link>
                </div>

                <div className="navigater">
                  <Link>
                    <p>Категорий </p>
                    <img src={img} />
                  </Link>
                </div>

                <div className="navigatertwo">
                  <Link>
                    <p>Платформы</p>
                    <img src={img} />
                  </Link>
                </div>
              </div>

              <div className="logIn">
                <Link to="LogIn">
                  <button className="buttonLogin">Логин</button>
                </Link>
              </div>

              <div class="mesenger">
                <div class=" whatsapp">
                  <img src={whatsapp} alt="" />
                </div>

                <div class=" vk">
                  <img src={vk} alt="" />
                </div>

                <div class="insta">
                  <img src={insta} alt="" />
                </div>
              </div>
            </div>
          </header>

          <section className="welcom">
            <div className="WelcomList">
              <div className="WelcomImge">
                <img src={welcom} alt="" />
              </div>
              <div className="WelcomText">
                <span>
                  <h2>
                    Найдите и скачайте свою любимую <br />{" "}
                    <a href="">БЕСПЛАТНУЮ</a> игру
                  </h2>
                </span>
              </div>
              <div className="WelcomButton">
                <button className="butoncotolog">Начать</button>
                <button className="buttonserh">Наити</button>
              </div>
            </div>
          </section>

          {/* <Switch>
            <Route>
              <GameItem />
            </Route>
          </Switch>  */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
