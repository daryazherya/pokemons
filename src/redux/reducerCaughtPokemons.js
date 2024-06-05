const initialState =  localStorage.getItem('pokemonIds') ? JSON.parse(localStorage.getItem('pokemonIds')) : []

export function reducerCaughtPokemons(state = initialState, action) {
    if (action.type === "CATCH_POKEMON") {
        if (!state.includes(action.id)) {
            const newState = [...state, action.id];
            localStorage.setItem('pokemonIds',JSON.stringify(newState))
            return newState;
        } else {
            const newState = state.filter((caught) => caught !== action.id);
            localStorage.setItem('pokemonIds',JSON.stringify(newState))
            return newState
        }
    }

    return state;
}
