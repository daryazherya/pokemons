import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducerCaughtPokemons } from "./reducerCaughtPokemons";
import { reducerPagination } from "./reducerPagination";
import { reducerAllPokemons } from "./reducerAllPokemons";
import { getAllPokemons } from "./getAllPokemons";

const reducer = combineReducers({
    pokemonIds: reducerCaughtPokemons,
    pagination: reducerPagination,
    pokemons: reducerAllPokemons,
});

const loggerMiddlewarw = (store) => (next) => (action) => {
    let result;
    result = next(action);

    return result;
};
const thunkMiddleware = (store) => (next) => (action) => {
    if (typeof action === "function") {
        // console.log(">>>", action);
        action(store.dispatch, store.getState);
    } else {
        next(action);
    }
};

const middlewareForPagination = (store) => (next) => (action) => {
    if (
        action.type === "CHANGE_PAGESIZE" ||
        action.type === "BACK_PAGE" ||
        action.type === "FORWARD_PAGE" ||
        action.type === "ALL_POKEMONS"
    ) {
        const pageSize = store.getState().pagination.pageSize;
        const pageNumber = store.getState().pagination.pageNumber;
        store.dispatch(getAllPokemons(pageNumber, pageSize))
    }
    next(action);
};

const m3 = (store) => (next) => (action) => {
    // console.log("m3");
    next(action);
};

export const store = createStore(
    reducer,
    applyMiddleware(
        loggerMiddlewarw,
        thunkMiddleware,
        middlewareForPagination,
        m3
    )
);
