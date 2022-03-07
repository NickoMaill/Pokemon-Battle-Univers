import { useContext, useState } from "react";
import { Context } from "../Context/AppContext";
import { customStyles } from "../Utils/customStyles";
import Card from "./Card";
import Modal from 'react-modal';
import fetchStatsPokemon from "../Utils/fetchStatsPokemon";
import "../Sass/MinCard.scss"

export default function MineCard(props) {
    const stateContext = useContext(Context);

    const [isLoaded, setIsLoaded] = useState(false)
    const [loadClass, setLoadClass] = useState("")

    Modal.setAppElement("#root");

    function openModal() {
        stateContext.setIsOpen(true);
    }

    function closeModal() {
        stateContext.setIsOpen(false);
        setIsLoaded(false)
    }

    const displayStats = (e) => {
        setLoadClass("loading")
        fetchStatsPokemon(e.target.value)
            .then(res => {

                fetchStatsPokemon(res.location_area_encounters)
                    .then(res => {
                        stateContext.setArea(res)
                    })

                stateContext.setCurrentPokemon(res)
                stateContext.setType(res.types[0].type.name)
                setIsLoaded(true)
                setLoadClass("")
                openModal()

            })
            .catch((err) => {
                console.error("Error while charging a Pokemon", err);
            })
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
                onClick={displayStats}
                value={stateContext.pokemon[props.keyId].url}
                className={`pokeButton ${loadClass}`}>

                Show Stats

            </button>

            <Modal
                isOpen={stateContext.modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <Card/>

            </Modal>

        </div>
    )
}