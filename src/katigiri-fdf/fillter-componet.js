import { Link } from "react-router-dom";
import Filterimg from "../image/filterimg.png";

function FillterComponent() {
  return (
    <div className="fillter">
      <div className="fillter-list">
        <div className="fillter-item">
          <p>
            Фильтр <img src={Filterimg} alt="" /> :
          </p>
        </div>
        <div className="fillter-inner">
          <div className="fillter-inner-text">
            <p>Категории :</p>
          </div>
          <div className="fillter-inner-links">
              <Link to="/Shooter">
                  <p>Shooter</p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FillterComponent;