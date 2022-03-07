//MODULE IMPORT
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./Context/AppContext";

//VIEWS IMPORT
import Home from "./Views/Home";
import Login from "./Views/Login";
import Pokedex from "./Views/Pokedex";
import Team from "./Views/Team";
import Battle from "./Views/Battle";

//COMPONENTS IMPORT
import Header from "./Components/Header";
import Footer from "./Components/Header";

//Main App function

export default function App() {

  const [gameNews, setGamesNews] = useState([]);

  const value = {
    gameNews,
    setGamesNews,

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
};