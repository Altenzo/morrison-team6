import { Link } from "react-router-dom";
import icon from "./image/icon.png";
import whatsapp from "./image/whatsapp.png";
import vk from "./image/vk.png";
import logo from "./image/logo.png";
import insta from "./image/insta.png";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <nav className="nav">
            <div className="nav-container">
              <ul className="ul">
                <li>
                  <a href="">Главная</a> <img className="icon" src={icon} alt="" />
                </li>
                <li>
                  <a href="">Категории</a> <img className="icon" src={icon} alt="" />
                </li>
                <li>
                  <a href="">Платформы</a> <img className="icon" src={icon} alt="" />
                </li>
              </ul>
            </div>
          </nav>

          <div className="sign-in">
            <button className="sign-in_btn">LOGIN</button>

            <div className="image-sign-in">
              <img src={whatsapp} alt="" />
              <img src={insta} alt="" />
              <img src={vk} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
