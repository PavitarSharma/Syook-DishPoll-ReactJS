import { createContext, useReducer, useContext } from "react";
import { pollReducer } from "./pollReducer";

const PollContext = createContext(null)

const PollContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(pollReducer, {
        ranks: [],
       
    })
    return (
        <PollContext.Provider value={{ state, dispatch }}>
            {children}
        </PollContext.Provider>
    )
}

export const PollState = () => {
    return useContext(PollContext)
}

export default PollContextProvider