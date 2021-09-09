import { useState, useEffect } from "react";
import GameFillter from "../katigiri-fdf/GameFillter";

function Shootlist() {
  const [shooter, setShootlist] = useState([]);

  useEffect(() => {
    fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "a2527e14b3msh8054ffeba10e8eep144ae1jsn286db16d9c5e",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="ShootList">
      {shooter.map((item) => (
        <GameFillter data={item} />
      ))}
    </div>
  );
}

export default Shootlist;
