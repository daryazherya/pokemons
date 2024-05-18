import { combineReducers, createStore } from "redux";
import { reducerCaughtPokemons } from "./reducerCaughtPokemons";
import { reducerPagination } from "./reducerPagination";
import { reducerAllPokemons } from "./reducerAllPokemons";

const reducer = combineReducers({
    pokemonIds: reducerCaughtPokemons,
    pagination: reducerPagination,
    pokemons: reducerAllPokemons
});

export const store = createStore(reducer);

