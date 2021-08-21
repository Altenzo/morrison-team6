import welcom from "../image/welcom.jpg";

function Welcom() {
  return (
    <section className="welcom">
      <div className="WelcomList">
        <div className="WelcomImge">
          <img src={welcom} alt="" />
        </div>
        <div className="welcome-title">
          <div className="WelcomText">
            <span>
              <h2>
                Найдите и скачайте свою любимую <br /> <a href="">БЕСПЛАТНУЮ</a>{" "}
                игру
              </h2>
            </span>
          </div>
          <div className="WelcomButton">
            <button className="butoncotolog">Начать</button>
            <button className="buttonserh">Наити</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcom;