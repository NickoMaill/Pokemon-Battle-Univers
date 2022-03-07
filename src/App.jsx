//MODULE IMPORT
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { Context } from "../src/Context/NewsContext";

//COMPONENTS IMPORT
import Home from './Views/Home';
import Login from './Views/Login';
import Pokedex from "./Views/Pokedex";
import Team from "./Views/Team";
import Battle from "./Views/Battle";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

//Create context

export const UserContext = createContext(false);

//Main App function

export default function App() {

  //declare state

  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("UserName");
  // const [userDataBase, setUserDataBase] = useState(JSON.parse(localStorage.getItem("userAccount")) || [])
  const [gameNews, setGameNews] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [type, setType] = useState("");
  const [id, setId] = useState(null);
  const [locationArea, setArea] = useState([]);
  const [weeklyPokemon, setWeeklyPokemon] = useState(JSON.parse(localStorage.getItem("weekPokemon")) || []);
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem("userTeam")) || []);
  const [pokeballStock, setPokeballStock] = useState(10)
  const [pokeDollard, setPokeDollard] = useState(2000)
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);



  //setting value for context

  const value = {
    isLogged,
    setIsLogged,

    userName,
    setUserName,

    gameNews,
    setGameNews,

    pokemon,
    setPokemon,

    locationArea,
    setArea,

    currentPokemon,
    setCurrentPokemon,

    weeklyPokemon,
    setWeeklyPokemon,

    team,
    setTeam,

    pokeballStock,
    setPokeballStock,

    pokeDollard,
    setPokeDollard,

    type,
    setType,

    id,
    setId,

    modalIsOpen,
    setIsOpen,

  };

  //App routing

  return (

    <Context.Provider value={value}>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokedex" element={<Pokedex />} />
          <Route exact path="/your-team" element={<Team />} />
          <Route exact path="/battle" element={<Battle />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>

        <Footer />


      </BrowserRouter>

    </Context.Provider>

  );
}