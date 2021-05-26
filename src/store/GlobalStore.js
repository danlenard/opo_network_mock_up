import React, { createContext, useContext, useReducer } from "react";
import reducer from './reducers/Reducer'

const initialState = {
  toDo : []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GlobalContext.Provider value={{ state, dispatch }}  >{children} </GlobalContext.Provider>;
};