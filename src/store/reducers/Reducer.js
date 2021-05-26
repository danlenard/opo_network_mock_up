const reducer = (state, action) => {
  const { type, payload } = action;
  console.log('state',state, action)
  switch (type) {
    case "ADD_TO_DO":
      console.log('@add', payload)
      return {
        ...state, 
        toDo: [...state.toDo,payload]
      };
    case "DELETE_TO_DO":
      console.log('@deleted')
      return {...state, toDo: []};
    default:
      console.log('@get state', state)
      return state;
  }
};

export default reducer;