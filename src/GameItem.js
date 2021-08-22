import { Link } from "react-router-dom";
import GameList from "./API";

function GameItem(props) {
  return (
    // <Link to={'/game/' + props.data.id} className="GameItem">
    <div className="cony">
      <img src={props.data.thumbnail} alt="" />
    </div>

    // </Link>
  );
}

export default GameItem;
