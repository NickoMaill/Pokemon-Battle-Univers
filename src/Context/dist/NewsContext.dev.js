"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;

var _react = require("react");

var Context = (0, _react.createContext)({
  gameNews: [],
  isLogged: false,
  isLoaded: false,
  pokemon: {},
  currentPokemon: {},
  weeklyPokemon: [],
  isPokeLoaded: false,
  isWeeklyLoaded: false,
  type: "",
  id: null
});
exports.Context = Context;