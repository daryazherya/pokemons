const initialState = ['2', '5'];

export function reducerCaughtPokemons(state = initialState, action) {
    if (action.type === "CATCH_POKEMON") {
        if (!state.includes(action.id)) {
            return [...state, action.id];
        } else {
            return state.filter((caught) => caught !== action.id);
        }
    }

    return state;
}
