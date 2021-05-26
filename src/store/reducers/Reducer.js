const reducer = (state, action) => {
  const { type, payload, index } = action;
  switch (type) {
    case "ADD_TO_DO":
      return {
        ...state, 
        toDo: [...state.toDo,payload]
      };
    case "DELETE_TO_DO":
      return {...state, toDo: state.toDo.filter((to_do, i)=>i !== index)};
    case "DELETE_ALL_TO_DO":
      return {...state, toDo: []};
    default:
      return state;
  }
};

export default reducer;