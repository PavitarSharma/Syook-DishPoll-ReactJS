export const dishesReducer = (state, action) => {
    const dishes = state.slice()
    switch (action.type) {
        case "ADD_DISHES":
            return action.payload

        case "RANK1":
            for (let dish of dishes) {
                if (dish.id === action.payload) {
                    dish.rank1 = true
                    dish.rank2 = false
                    dish.rank3 = false
                } else {
                    dish.rank1 = false
                }
            }

            return dishes

        case "RANK2":
            for (let dish of dishes) {
                if (dish.id === action.payload) {
                    dish.rank1 = false
                    dish.rank2 = true
                    dish.rank3 = false
                } else {
                    dish.rank2 = false
                }
            }

            return dishes

        case "RANK3":
            for (let dish of dishes) {
                if (dish.id === action.payload) {
                    dish.rank1 = false
                    dish.rank2 = false
                    dish.rank3 = true
                } else {
                    dish.rank3 = false
                }
            }

            return dishes

        default:
            return state
    }
}