import { Link } from "react-router-dom";
import GameList from "./API";

function GameItem(props) {
  return (
    <Link to={"/info/" + props.data.id} className="GameItem">
      <div className="cony">
        <div className="container-api">
          <img
            src={props.data.thumbnail}
            alt=""
            className="container-api-img"
          />
          <h3>{props.data.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default GameItem;
