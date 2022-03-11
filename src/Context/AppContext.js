import { createContext } from "react";

export const Context = createContext({
    gameNews:[], 
    isLogged: false,
    userName:"",
    pokemon: {},
    locationArea:[],
    currentPokemon: {},
    weeklyPokemon:[],
    team: [],
    pokeballStock:10,
    pokeDollard: 2000,
    id: null,
    modalIsOpen: false,
    currentId: null,
});
