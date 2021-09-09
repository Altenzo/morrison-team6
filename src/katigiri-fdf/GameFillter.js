import {Link} from "react-router-dom"

function GameFillter (props) {
    return(
        <Link to={"/GameFillter/" + props.data.id} className="GameFillter">
        <div className="cony">
          <div className="container-api">
            <div className="img-api">
              <img src={props.data.thumbnail} alt="" />
            </div>
  
            <div className="title-api">
              <h3>{props.data.title}</h3>
            </div>
          </div>
        </div>
      </Link>
    )
}

export default GameFillter;