import reducer, { todos } from "../reducers/Reducer";
import  createStore  from "../createStore";

const load = createStore(reducer, todos);

export default load;