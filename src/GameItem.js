import { Link } from "react-router-dom";
import GameList from "./API";

function GameItem(props) {
  return (
    <Link to={"/info/" + props.data.id} className="GameItem">
      <div className="cony">
        <div className="container-api">
<<<<<<< HEAD
          <div className="img-api">
            <img src={props.data.thumbnail} alt="" />
          </div>

          <div className="title-api">
            <h3>{props.data.title}</h3>
          </div>
=======
          <img
            src={props.data.thumbnail}
            alt=""
            className="container-api-img"
          />
          <h3>{props.data.title}</h3>
>>>>>>> 9fbbd09bbddb43394b8c3fc59fd5dde8ecb4820d
        </div>
      </div>
    </Link>
  );
}

export default GameItem;
