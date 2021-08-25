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
    )
}

export default Footer