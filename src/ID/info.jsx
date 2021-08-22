import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Info() {
    let { id } = useParams()

    const [game, setGamelist] = useState([])

    useEffect(() => {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc", {
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
                setGamelist(data)
            })

    }, [])

    const [info, setInfo] = useState(false)
    useEffect(() => {
        setInfo(game.filter((el) => String(el.id) == String(id))[0])
    }, [id])

    if (!info) return ('ничего нет')


    return (
        <div className="info-page">
            <img src={info.thumbnail} alt="" />
            <h1>{info.title}</h1>
            <h1>{info.release_date}</h1>
            <h1>{info.genre}</h1>
            <h1>{info.short_description}</h1>
            <a href="">{info.freetogame_profile_url}</a>
        </div>
    )

}

export default Info