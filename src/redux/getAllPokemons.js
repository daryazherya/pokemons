import { fetchPokemons } from "../api/api";

// thunk ↓
export const getAllPokemons = (pageNumber, pageSize) => (dispatch, getState) => {
    fetchPokemons(pageNumber, pageSize).then((data) => {
        dispatch({type: 'ALL_POKEMONS', pokemons: data.allPokemons, count: data.count })
    }) 
}

