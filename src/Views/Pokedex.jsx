//MODULE IMPORT
import { useState, useContext, useEffect } from "react";
import { Context } from "../Context/AppContext";

//COMPONENTS IMPORT
import MineCard from "../Components/MinCard";

//FUNCTION IMPORT
import idFormat from "../Utils/idFormat";
import fetchListPokemon from "../Utils/fetchListPokemon";

//LIBRARY IMPORT

//STYLE IMPORT
import "../App.css";
import "../Sass/Pokedex.scss";
import { Link, useNavigate } from "react-router-dom";

// Main Function App
export default function Pokedex() {

    //Import Context
    const stateContext = useContext(Context);

    // Create State
    const [limitFetch, setLimitFetch] = useState(20)
    const [loadClass, setLoadClass] = useState("btn-load-next")
    const [isLoaded, setIsLoaded] = useState(false)



    // function for load more pokemon pokedex start at "limit=20"
    const loadNextPokemon = () => {
        setLimitFetch(limitFetch + 20)
        setLoadClass("btn-load-next loading")

    }

    useEffect(() => {

        fetchListPokemon(limitFetch)
            .then(res => {
                stateContext.setPokemon(res.results)
                setLoadClass("btn-load-next")
                setIsLoaded(true)
                console.log(res);


            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
    }, [limitFetch])

    return (
        <div className="pokedex-container">

            <div className="pokedex-content">

                <h1>Pokedex</h1>

                <div className="pokedex-wrapper">

                    {isLoaded ? stateContext.pokemon.map((_pokemon, i) => {
                        
                        if (i === 0 || i <= stateContext.pokemon.length) {
                            return (
                                <MineCard
                                    key={i}
                                    keyId={i}
                                    id={idFormat(i + 1)}
                                    fav="../assets/images/Header-icon/pokeball.webp"
                                />

                            )
                        }
                    })

                        :

                        <div className="load-div">
                            <img className="load" src={require("../assets/images/download.png")} alt="" />
                        </div>

                    }

                </div>

                <button className={loadClass} onClick={loadNextPokemon}>more Pokemon</button>

            </div>

        </div>
    )
}


