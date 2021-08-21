import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import img from "./imge/icon.png";
import whatsapp from "./imge/whatsapp.png";
import vk from "./imge/vk.png";
import imge from "./imge/logo.png";
import insta from "./imge/insta.png";

function Header() {
  return (
      <div className="HeaderFuntion">
      <header>
        <div className="headerList">
          <div className="logo">
            <img src={imge} alt="" />
          </div>

          <div className="headerText">
            <div className="header-title">

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

              <div className="logIn">
                <Link to="LogIn">
                  <button className="buttonLogin">Логин</button>
                </Link>
              </div>
            </div>
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
    </div>
  );
}
export default Header;
