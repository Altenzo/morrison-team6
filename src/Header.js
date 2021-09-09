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
          <div className="nav-logo">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <nav className="nav">
              <div className="nav-container">
                <ul className="ul">
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>
                    <Link to="/a">Категории</Link> <img className="icon" src={icon} alt="" />
                  </li>
                  <li>
                    <Link to="/b">Платформы</Link> <img className="icon" src={icon} alt="" />
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="sign-in">
            <Link to="/login">
              <button className="sign-in_btn">LOGIN</button>
            </Link>

            <div className="image-sign-in">
              <a href="">
                <img src={whatsapp} alt="" />
              </a>
              <a href="">
                <img src={insta} alt="" />
              </a>
              <a href="">
                <img src={vk} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
