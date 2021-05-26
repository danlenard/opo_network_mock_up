// store.js
import React, {createContext, useReducer} from 'react';

const initialState = [];
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
  switch(action.type) {
    case 'addToDo':
      const newState = state.push(action.values)
      return newState;
    case 'resetToDo':
      state = [];
      return newState;
    case 'getState':
      return state;
    default:
    throw new Error();
  };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }