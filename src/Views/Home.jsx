//MODULE IMPORT
import { useEffect, useContext, useState } from "react";
import { Context } from "../Context/AppContext";

//COMPONENTS IMPORT
import NewsCard from "../Components/NewsCard";
import MineCard from "../Components/MinCard";

//FUNCTION IMPORT
import idFormat from "../Utils/idFormat";
import randomId from "../Utils/randomId";
import fetchListPokemon from "../Utils/fetchListPokemon";
import fetchNews from "../Utils/fetchNews";

//STYLE IMPORT
import "../Sass/Home.scss";

//Main function home

export default function Home() {

    //Home State

    const stateContext = useContext(Context);

    const [newsIsLoaded, setNewsIsLoaded] = useState(false);
    const [weeklyLoaded, setWeeklyLoaded] = useState(false);

    //On load Page

    useEffect(() => {

        fetchNews().then(res => {
            stateContext.setGameNews(res)
            setNewsIsLoaded(true)
        })
        .catch((err) => {
            console.error("Error while charging the PokeNews", err);
        });

        //PokeApi request, loads 721 pokemon, there's more pokemon, but i have just only 721 cry sounds

        fetchListPokemon(721).then(res => {
            stateContext.setPokemon(res.results)
            setWeeklyLoaded(true)
        })
        .catch((err) => {
            console.error("Error while charging the PokeList", err);
        });

        // function to determinate the pokemon of the week, functional only on monday

        function IdsWeek() {
            const today = new Date().getUTCDay();

            if (today === 0 || stateContext.weeklyPokemon.length === 0) {
                const res = randomId(3, 721)
                stateContext.setWeeklyPokemon(res)
                localStorage.setItem('weekPokemon', JSON.stringify(res))

            } else {
                return stateContext.weeklyPokemon
            };

        };

        IdsWeek();

    }, []);

    //Home Content
    return (

        <div className="home-container">

            <div className="home-content">
                
                <div>
                    <h1>Welcome to te the new PokeBattle Universe</h1>
                </div>

                <div className="total-news-wrapper">

                    {newsIsLoaded ? stateContext.gameNews.map((news, i) => {

                        if (i === 0 || i <= 3) {
                            return (

                                <NewsCard key={i} idKey={i} />

                            );
                        };
                    })

                        :

                        <div className="load-div">
                            <img className="load" src={require("../assets/images/download.png")} alt="" />
                        </div>
                    }

                </div>

                <div className="weekly-pokemon-container">

                    <h2>Pokemon of the Weeks</h2>

                    <div className="weekly-pokemon-content">

                        {weeklyLoaded ? stateContext.weeklyPokemon.map((week, i) => {

                            if (i === 0 || i <= stateContext.weeklyPokemon.length) {
                                return (

                                    <MineCard
                                        key={i}
                                        keyId={stateContext.weeklyPokemon[i] - 1}
                                        id={idFormat(stateContext.weeklyPokemon[i])}
                                    />

                                );
                            };
                        })

                            :

                            <div className="load-div">
                                <img className="load" src={require("../assets/images/download.png")} alt="" />
                            </div>

                        }

                    </div>

                </div>

                <div className="img-container">

                    <div className="header-img-div">
                        <img className="header-img" src={require("../assets/images/pokemon-Header.webp")} alt="" />
                    </div>

                </div>

            </div>

        </div>

    );


};

