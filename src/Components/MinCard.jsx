import { useContext } from "react";
import { Context } from "../Context/AppContext";

import "../Sass/MinCard.scss"

export default function MineCard(props) {
    const stateContext = useContext(Context);

    return (
        <div className="min-card-div">

            <h3>{stateContext.pokemon[props.keyId].name}</h3>
            <img
                className="pokemon-sprite"
                src={require(`../assets/images/officialSprites/${props.id}.webp`)}
                alt={stateContext.pokemon[props.keyId].name}
                title={stateContext.pokemon[props.keyId].name}
            />
            <span>id n° {props.id}</span>
            <button
                value={stateContext.pokemon[props.keyId].url}
                className="pokeButton">

                Show Stats

            </button>

        </div>
    );
};