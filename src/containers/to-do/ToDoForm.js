import React, { createContext, useContext, useState } from 'react';
import {toast} from 'react-toastify';
import Header from '../../reusable/Header'
import { GlobalContext } from '../../store/GlobalStore';

let ToDoContext = createContext();

function ToDoForm (){
  //contexts
  const {dispatch} = useContext(GlobalContext)
  
  //states
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  // ON BLUR and ON SUBMIT SAVE STATE
  function saveData(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  //ON FINISH FORM FUNCTION
  function handleSubmit(e) {
    e.preventDefault();
    toast.info('Form has been successfully added.');
    dispatch({type: 'ADD_TO_DO', payload: formData})
    //reset state and form
    document.getElementById("to-do-form").reset();
    setFormData({
      title: '',
      description: '',
      date: '',
    })
  }

  return (
    <div>
      <Header/>
      <ToDoContext.Provider value={formData}>
        <form onSubmit={(e)=>handleSubmit(e)} id="to-do-form"> 
          <label>
            Title:
            <input type="text" name="title" required onSubmit={(e)=>saveData(e)} onBlur={(e)=>saveData(e)} />
          </label>
          <br/>
          <label>
            Description:
            <input type="text" name="description" onSubmit={(e)=>saveData(e)} onBlur={(e)=>saveData(e)}/>
          </label>
          <br/>
          <label>
            Date:
            <input type="date" name="date" required onSubmit={(e)=>saveData(e)} onBlur={(e)=>saveData(e)}/>
          </label>
          <br/>
            <input type="submit" value="Submit" />
        </form>
      </ToDoContext.Provider>
    </div>
  );
}

export default ToDoForm;