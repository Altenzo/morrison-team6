<<<<<<< HEAD
import logo from "./image/logo.png";

function Footer(){
    return(
       <div className="footer-container">
           <div className="footerList">
               <div className="footer-contact">
                   <p>Связаться с нами</p>
                   <p>API</p>
                   <p>Баги и ошибки</p>
               </div>
               <div className="footer-catigoria">
                   <p>Главная</p>
                   <p>Категории</p>
                   <p>Платформы</p>
               </div>
               <div className="footer-img">
                   <img src={logo} alt="" ></img>
                   <h6>© 2021 Morrison Team6 Media, все права защищены. <br />
Все товарные знаки являются собственностью соответствующих владельцев.</h6>
               </div>
           </div>
       </div>
=======
import { Link } from "react-router-dom"
import logo from "./image/logo.png";

function Footer() {


    
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-container">
                    <nav className="nav-footer">
                        <Link className="footer-nav">
                            Связаться с нами
                        </Link>

                        <Link className="footer-nav">
                            API
                        </Link>

                        <Link className="footer-nav">
                            Баги и ошибки
                        </Link>
                    </nav>

                    <nav className="nav-footer-2">
                        <Link className="footer-nav2">
                            Главная
                        </Link>

                        <Link className="footer-nav2">
                            Категории
                        </Link>

                        <Link className="footer-nav2">
                            Платформы
                        </Link>
                    </nav>


                    <div className="logo-footer">
                        <div className="img-footer">

                        <img src={logo} alt="" />
                        </div>

                        <div className="footer-title">
                            <h5>
                                © 2021 Morrison Team6 Media, все права защищены.<br/>
                                Все товарные знаки являются собственностью соответствующих владельцев.
                            </h5>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
>>>>>>> 64b2ccf3391706c444238aa76fa68cdf8464b3ba
    )
}

export default Footer