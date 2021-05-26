import React, {useContext} from 'react'
import {withRouter} from 'react-router-dom';
import { GlobalContext } from '../../store/GlobalStore';
import Header from '../../reusable/Header'

import '../../ToDoList.css'

function ToDoList(){
  //context
  const { state, dispatch } = useContext(GlobalContext);
  console.log(state, dispatch({type: ''}))
  // useStore();

  return(
    <div>
      <Header/>
      <div className="container">
        {state.toDo.map((to_do, i)=><div className="card" key={i}>
            <div className="title">{to_do.title}</div>
            <div className="date">{to_do.date}</div>
            <hr/>
            <div className="description">{to_do.description}</div>
        </div>)}
        
      </div>
    </div>
  );
}

export default withRouter(ToDoList)