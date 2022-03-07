import { useState } from "react";
import fetchNews from "../Utils/fetchNews";

export default function Home() {

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
            <h1>Home</h1>
        </div>

    );


};
