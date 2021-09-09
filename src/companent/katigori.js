import { Link } from "react-router-dom";
import FillterComponent from "../katigiri-fdf/GameFillter";

function Katigori() {

  return (
    <div className="katigori">
      <div className="katigori-list">
        <div className="katigori-item">
          <FillterComponent />
        </div>

      </div>
    </div>
  );
}

export default Katigori;
