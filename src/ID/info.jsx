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

    if (info) {
        return (
            <div className="info-page">
                <div className="info-inner">
                    <div className="info-container">
                        <div className="info-df">
                            <div className="info-img">
                                <img src={info.thumbnail} alt="" />
                                <button>ИГРАТЬ</button>
                            </div>


                            <div className="info-title">
                                <div className="info-h1">

                                    <h1>{info.title}</h1>
                                </div>
                                <div className="info-desc">
                                    <h1>{info.short_description}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info-info">
                        <div className="title-info2">
                            <h1>Краткая информация</h1>
                        </div>

                        <div className="box-info">
                            <div className="box-1">
                                <div className="box-title">
                                    <h2>Категория</h2>
                                    <p>{info.genre}</p>
                                </div>

                                <div className="box-title">
                                    <h2>Платформа :</h2>
                                    <p>{info.platform}</p>
                                </div>

                                <div className="box-title">

                                    <h2>Издатель :</h2>
                                    <p>{info.publisher}</p>
                                </div>
                            </div>
                        </div>

                        <div className="box-info-2">
                            <div className="box-2">
                                <div className="box-title">
                                    <h2>Разработчик :</h2>
                                    <p>{info.publisher}</p>
                                </div>
                                <div className="box-title">
                                    <h2>Дата релиза : </h2>
                                    <p>{info.release_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    } else {
        return ("не найдено")
    }
}

export default Info