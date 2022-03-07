// MODULE IMPORT
import { useState, useEffect, useContext } from "react";
import { Context } from "../Context/AppContext";

//FUNCTION IMPORT
import fetchNews from "../Utils/fetchNews";

//COMPONENTS IMPORT
import NewsCard from "../Components/NewsCard";

export default function Home() {

    const stateContext = useContext(Context);

    const [newsIsLoaded, setNewsIsLoaded] = useState(false)

    useEffect(() => {

        fetchNews().then(res => {
            stateContext.setGameNews(res)
            setNewsIsLoaded(true)
        })
            .catch((err) => {
                console.error("Error while charging the PokeNews", err);
            });

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

                <div className="img-container">

                    <div className="header-img-div">
                        <img className="header-img" src={require("../assets/images/pokemon-Header.webp")} alt="" />
                    </div>

                </div>

            </div>

        </div>

    );


};
