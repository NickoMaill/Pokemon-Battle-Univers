import { Link } from "react-router-dom";
import UserResume from "./UserResume";
import "../Sass/Header.scss"

export default function Header() {
    return (
        <header>

            <div className="nav-div">

                <div className="header-top">

                    <UserResume />
                    <div className="title-container">
                        <img alt="Pokemon Logo" className="logo" src={require('../assets/images/Header-icon/pokemon-logo.webp')} />
                        <h1 className="title-header">Battle Universe</h1>

                    </div>


                </div>


                <nav className="header-bottom">

                    <Link className="link-div" to="/">
                        <i><img alt="Home icon" className="navbar-icon pikachu" src={require("../assets/images/Header-icon/pikachu-icon.webp")} /></i>
                        <p className="link">Accueil</p>
                    </Link>



                    <Link className="link-div" to="/pokedex">
                        <i><img alt="Pokedex icon" className="navbar-icon pokedex" src={require("../assets/images/Header-icon/pokedex-icon.webp")} /></i>
                        <p className="link">Pokedex</p>
                    </Link>



                    <Link className="link-div" to="/your-team">
                        <i><img alt="Team icon" className="navbar-icon pokeball" src={require("../assets/images/Header-icon/pokeball.webp")} /></i>
                        <p className="link">Ton équipe</p>
                    </Link>

                    <Link className="link-div" to="/pokeshop">
                        <i><img alt="Team icon" className="navbar-icon pokeball" src={require("../assets/images/Header-icon/shop.webp")} /></i>
                        <p className="link">PokéShop</p>
                    </Link>



                    <Link className="link-div" to="/battle">
                        <i><img alt="Battle icon" className="navbar-icon card-icon" src={require("../assets/images/Header-icon/card-icon.webp")} /></i>
                        <p className="link">Duel</p>
                    </Link>


                    <Link className="link-div" to="/login">
                        <i><img alt="Login icon" className="navbar-icon red-hat" src={require("../assets/images/Header-icon/red-hat.webp")} /></i>
                        <p className="link">Connexion</p>
                    </Link>

                </nav>

            </div>

        </header>
    )
}