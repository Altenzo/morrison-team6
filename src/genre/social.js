import { useState, useEffect } from "react";

function SocialList() {
    const [social, setSociallist] = useState([])

    useEffect(() => {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=Social", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "a2527e14b3msh8054ffeba10e8eep144ae1jsn286db16d9c5e"
            }
        })
            .then(response =>
                response.json())
            .then(data => {
                console.log(data)
               
            })

    }, [])


    return (
        <div className="GameList">
            {/* {
                game.map((item) => (
                    <GameItem data={item} />
                ))
            } */}
        </div>
    )
}

export default SocialList
