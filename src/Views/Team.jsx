import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/AppContext";
import idFormat from "../Utils/idFormat";
import MineCard from "../Components/MinCard"
import fetchListPokemon from "../Utils/fetchListPokemon";
import "../Sass/Pokedex.scss";


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
        <div className="pokedex-container">

            <div className="pokedex-content">

                <h1>Your Pokemon team</h1>

                <div className="pokedex-wrapper">

                    {stateContext.team.length === 0 ? (
                        <h2>Vous n'avez pas encore de favoris</h2>

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