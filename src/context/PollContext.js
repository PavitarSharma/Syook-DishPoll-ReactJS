import { createContext, useReducer, useContext, useEffect } from "react";
import { dishesReducer } from "./dishesReducer";
import votesReducer from "./votesReducer";
import data from "../db.json"
const PollContext = createContext(null)


const PollContextProvider = ({ children }) => {
    const [dishes, dispatchDishes] = useReducer(dishesReducer, [])
    const [votes, dispatchVotes] = useReducer(votesReducer, [])

    useEffect(() => {
        const dishItem = dishes.slice()
        // eslint-disable-next-line
        data.map((item) => {

            dishItem.push({
                id: item.id,
                dishName: item.dishName,
                discription: item.description,
                image: item.image,
                rank1: false,
                rank2: false,
                rank3: false
            })

        })

        dispatchDishes({
            type: "ADD_DISHES",
            payload: dishItem
        })
        // eslint-disable-next-line 
    }, [])

    return (
        <PollContext.Provider value={{ dishes, votes, dispatchDishes, dispatchVotes }}>
            {children}
        </PollContext.Provider>
    )
}

export const PollState = () => {
    return useContext(PollContext)
}

export default PollContextProvider