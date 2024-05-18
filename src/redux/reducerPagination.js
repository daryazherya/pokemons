const initialState = {
    pageSize: 10,
    pageNumber: 0,
    count: 0,
};

export function reducerPagination(state = initialState, action) {
    if (action.type === "FORWARD_PAGE") {
        return { ...state, pageNumber: state.pageNumber + 1 };
    }
    if (action.type === "BACK_PAGE") {
        return { ...state, pageNumber: state.pageNumber - 1 };
    }
    if (action.type === "CHANGE_PAGESIZE") {
        console.log(action, "action");
        return { ...state, pageSize: action.pageSize };
    }
    if (action.type === "ALL_POKEMONS") {
        return { ...state, count: action.count };
    }

    return state;
}
