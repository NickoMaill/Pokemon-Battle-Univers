import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/AppContext";
import idFormat from "../Utils/idFormat";
import MineCard from "../Components/MinCard"
import fetchListPokemon from "../Utils/fetchListPokemon";
import "../Sass/Team.scss";


export default function Team() {

    const stateContext = useContext(Context)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {

        fetchListPokemon(721)
            .then(res => {
                stateContext.setPokemon(res.results)
                setIsLoaded(true)


            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [])

    return (
        <div className="team-container">

            <div className="team-content">

                <h1>Your Pokemon team</h1>

                <div className="team-wrapper">

                    {stateContext.team.length === 0 ? (
                        <div className="no-team">
                            <h2>Vous n'avez pas de Pokemon ...</h2>
                            <img
                                className="sad-pikachu"
                                src={require('../assets/images/sad-pikachu.webp')}
                                alt="Sad Pikachu"
                            />
                        </div>

                    )
                        :

                        isLoaded ? stateContext.team.map((userTeam, i) => {
                            if (i === 0 || i <= stateContext.team.length) {
                                return (
                                    <MineCard
                                        key={i}
                                        keyId={userTeam - 1}
                                        id={idFormat(userTeam)}
                                    // fav="../assets/images/Header-icon/pokeball.png"
                                    />

                                )
                            }
                        })

                            :

                            <div className="load-div">
                                <img className="load" src={require("../assets/images/download.png")}
                                    alt="loading-spinner" />
                            </div>

                    }

                </div>

            </div>

        </div>
    )
}