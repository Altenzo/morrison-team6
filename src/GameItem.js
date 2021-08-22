import { Link } from "react-router-dom";
import GameList from "./API";

function GameItem(props) {
  return (
    <Link className="GameItem">
      <div className="cony">
        <img src={props.data.thumbnail} alt="" />
        <h1>{props.data.title}</h1>
      </div>

    </Link>
  );
}

export default GameItem;
