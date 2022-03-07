import { useContext } from "react";
import { Context } from "../Context/NewsContext";

import "../Sass/UserResume.scss"

export default function UserResume() {

    const stateContext = useContext(Context);

    return (
        <div className="user-container">

            <div className="user-div">

                <img className="user-img" src={require("../assets/images/heUser.webp")} />
                <p><strong>{stateContext.userName}</strong></p>

                <div className="user-stock">

                    <div className="stock-div">
                        <img className="info-icon" src={require("../assets/images/Header-icon/pokedex-icon-2.webp")} alt="" />
                        <p> : {stateContext.team.length}</p>
                    </div>

                    <div className="stock-div">
                        <img className="info-icon" src={require("../assets/images/Header-icon/pokeball.webp")} alt="" />
                        <p>  x  {stateContext.pokeballStock}</p>
                    </div>

                    <div className="stock-div">
                        <img className="info-icon" src={require("../assets/images/Header-icon/potion.webp")} alt="" />
                        <p> x </p>
                    </div>

                    <div className="stock-div">
                        <img className="info-icon" src={require("../assets/images/Header-icon/pokedollars.webp")} alt="" />
                        <p>{stateContext.pokeDollard}₽</p>
                    </div>

                </div>

            </div>
        </div>
    );


}