import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/AppContext";

import "../Sass/MinCard.scss"

export default function MineCard(props) {
    const stateContext = useContext(Context);
    const navigate = useNavigate()

    const catchId = (e) => {
        stateContext.setCurrentId(parseInt(e.target.value) + 1)
        console.log(parseInt(e.target.value) + 1);
        navigate('/pokemon-stats');
    }

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
                value={props.keyId}
                className="pokeButton"
                onClick={(e) => catchId(e)}
            >
                Show Stats
            </button>

        </div>
    );
};