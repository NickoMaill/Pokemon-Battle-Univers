//MODULE IMPORT
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/AppContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { customStyles } from "../Utils/customStyles";

//FUNCTION IMPORT
import idFormat from "../Utils/idFormat";
import fetchStatsPokemon from "../Utils/fetchStatsPokemon"
import Modal from 'react-modal';

//STYLE IMPORT
import "../Sass/Card.scss"
import 'react-toastify/dist/ReactToastify.css';

export default function Card() {
    const stateContext = useContext(Context);

    const [_teamClass, setTeamClass] = useState("no-added");
    const [isLoaded, setIsLoaded] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()

    Modal.setAppElement("#root");

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {

        if (stateContext.currentId === null) {
            return
        } else {

            fetchStatsPokemon(stateContext.currentId)
                .then(res => {
                    stateContext.setCurrentPokemon(res);
                    setIsLoaded(true)
                })
                .catch((err) => {
                    console.error("Error while charging a Pokemon", err);
                })
            console.log(stateContext.currentId);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('userTeam', JSON.stringify(stateContext.team))
        console.log(stateContext.team);
    }, [stateContext.team])

    const catchEmAll = () => {

        if (stateContext.team.includes(stateContext.currentPokemon.id)) {
            let tempTeam = stateContext.team;
            stateContext.setTeam(tempTeam.splice(tempTeam.indexOf(stateContext.currentPokemon.id), 1));
            stateContext.setTeam(tempTeam);
            setTeamClass("no-added");
            setTimeout(() =>
                navigate('/your-team'), 500
            )
        } else {

            if (stateContext.pokeballStock === 0) {
                console.warn("plus de pokeball");
                toast.error("Plus de Pokeball, retournez au shop !")
                return

            } else if (stateContext.team.length === 6) {
                console.warn("limit to 6 pokemon");
                toast.warning("your team is limited ")
                return

            } else {
                openModal();
                setTimeout(() => closeModal(), 1100);
                const catchPokemon = Math.random() < 0.3
                console.log(catchPokemon);

                if (catchPokemon === false) {
                    console.warn("oups")
                    stateContext.setPokeballStock(stateContext.pokeballStock - 1)
                    setTimeout(() =>
                        toast.warn(`Rat??... il vous reste ${stateContext.pokeballStock - 1} pokeball`), 1250
                    )
                    return

                } else {
                    stateContext.setTeam(prevPoke => [...prevPoke, stateContext.currentPokemon.id])
                    setTeamClass("");
                    stateContext.setPokeballStock(stateContext.pokeballStock - 1)
                    toast.success("Pokemon captur?? !")

                }
            }

        }

    }

    if (isLoaded !== true && stateContext.currentId === null) {
        return (
            <h1>pas de pokemon</h1>
        );

    } else if (isLoaded !== true) {
        return (
            <div className="load-div">
                <img className="load" src={require("../assets/images/download.png")} alt="" />
            </div>
        );
    } else {

        return (
            <div className="Card-view">

                <div className={`poke-card-${stateContext.currentPokemon.types[0].type.name}`}>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <img src={require('../assets/images/catchGif.gif')} alt="" />
                    </Modal>

                    <ToastContainer />

                    <div className="title-div">

                        <h2>{stateContext.currentPokemon.name}</h2>
                        <p>id n?? {idFormat(stateContext.currentPokemon.id)}</p>

                        <div className="sprites-div" >

                            <img
                                className="default-sprites"
                                src={stateContext.currentPokemon.sprites.front_default}
                                alt={`front of ${stateContext.currentPokemon.name}`}
                            />
                            <img
                                className="sprites"
                                src={require(`../assets/images/officialSprites/${idFormat(stateContext.currentPokemon.id)}.webp`)}
                                alt={stateContext.currentPokemon.name}
                                title={stateContext.currentPokemon.name}
                            />
                            <img
                                className="default-sprites"
                                src={stateContext.currentPokemon.sprites.back_default}
                                alt={`game back of ${stateContext.currentPokemon.name}`}
                            />

                        </div>

                        <button
                            onClick={catchEmAll}
                            className="team-button"
                        >
                            <img className={`team-icon ${!stateContext.team.includes(stateContext.currentPokemon.id) && "no-added"}`}
                                src={require("../assets/images/Header-icon/pokeball.webp")}
                                alt="add to your team button" />
                        </button>

                    </div>

                    <div className="card-content">


                        <div className="stats-container">

                            <div>

                                <h4 className="title-stats">Stats</h4>

                                <div className="stats-list-div">
                                    <ul className="stats-list">
                                        {stateContext.currentPokemon.stats.map((stats, i) => (
                                            <li key={i}>{stats.stat.name} : {stats.base_stat}</li>
                                        ))}
                                        <li>Base experience : {stateContext.currentPokemon["base_experience"]} xp</li>
                                    </ul>
                                </div>

                            </div>

                            <div>

                                <h4 className="title-stats">Abilities</h4>

                                <div className="stats-list-div">
                                    <ul className="stats-list">
                                        {stateContext.currentPokemon.abilities.map((abilities, i) => (
                                            <li key={i}>{abilities.ability.name}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="wh-specs">
                            <h4 className="title-stats">Height : {stateContext.currentPokemon.height / 10} m</h4>
                            <h4 className="title-stats">Weight : {stateContext.currentPokemon.weight / 10} kg</h4>
                        </div>

                        <div>
                            <h4 className="title-stats">Types</h4>
                            <ul className="type-ul">
                                {stateContext.currentPokemon.types.map((types, i) => (
                                    <li key={i}><img className="types-img" src={require(`/src/assets/images/Types/${types.type.name}.webp`)} alt={types.type.name} /></li>
                                ))}
                            </ul>
                        </div>

                        <figure>
                            <audio controls src={require(`../assets/audio/${stateContext.currentPokemon.id}.ogg`)}><code>audio</code></audio>

                        </figure>
                    </div>

                </div>
            </div>


        )
    }

}