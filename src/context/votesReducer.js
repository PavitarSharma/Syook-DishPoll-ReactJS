const votesReducer = (state, action) => {
    const dishes = state.slice()
    switch (action.type) {
        case "RANK1":
            dishes[0] = ""
            dishes[0] = action.payload[1]
            return dishes

        case "RANK2":
            dishes[1] = ""
            dishes[1] = action.payload[1]
            return dishes

        case "RANK3":
            dishes[2] = ""
            dishes[2] = action.payload[1]
            return dishes

        default:
            return state
    }
}

export default votesReducer