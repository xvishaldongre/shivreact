import { createContext, useReducer, useContext } from "react";

// create context
export const StateContext = createContext();

//  create a provider 

export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);