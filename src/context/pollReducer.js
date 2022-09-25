export const pollReducer = (state, action) => {
    switch (action.type) {
        case "ADD_RANKS":
            return {
                ...state,
                ranks: [...state.ranks, { ...action.payload, }],
                
            }

        case "REMOVE_RANKS":
            return {
                ...state,
                ranks: state.ranks.filter((c) => c.id !== action.payload.id),
            };
        default:
            return state
    }
}