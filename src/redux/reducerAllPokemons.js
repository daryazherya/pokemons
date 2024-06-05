const initialState = [];

export function reducerAllPokemons (state = initialState, action) {
    if(action.type === 'ALL_POKEMONS') {
        return action.pokemons
    }
    return state
}
