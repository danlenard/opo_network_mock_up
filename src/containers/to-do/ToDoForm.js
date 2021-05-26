import React, { useContext, useState } from 'react';
import {toast} from 'react-toastify';
import Header from '../../reusable/Header'
import { GlobalContext } from '../../store/GlobalStore';

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
    toast.success('Form has been successfully added.');
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
        <h3 style={{textAlign: 'center', margin: '20px'}}>To Do Form</h3>
        <form onSubmit={(e)=>handleSubmit(e)} id="to-do-form" 
          style={{
            textAlign: 'center', 
            maxWidth: '400px', 
            margin: 'auto', 
            background: '#f2f2f2', 
            padding: '20px', 
            borderRadius: '8px'
          }}
        > 
         <table style={{width: '100%'}}>
          <tr>
            <td style={{textAlign: 'right'}}>* Title: </td>
            <td style={{textAlign: 'left'}}>
              <input type="text" name="title" style={{width: '200px', borderRadius: '5px'}} required onSubmit={(e)=>saveData(e)} onBlur={(e)=>saveData(e)} />
            </td>
          </tr>
          <tr>
            <td style={{textAlign: 'right'}}>Description: </td>
            <td style={{textAlign: 'left'}}>
              <input type="text" name="description" style={{width: '200px', borderRadius: '5px'}} onSubmit={(e)=>saveData(e)} onBlur={(e)=>saveData(e)}/>
            </td>
          </tr>
          <tr>
            <td style={{textAlign: 'right'}}>* Date: </td>
            <td style={{textAlign: 'left'}}>
              <input type="date" name="date" style={{width: '200px', borderRadius: '5px'}} required onSubmit={(e)=>saveData(e)} onBlur={(e)=>saveData(e)}/>
            </td>
          </tr>
        </table> 
            <input type="submit" value="Submit" style={{width: '100px', borderRadius: '5px', background: 'green', color: 'white'}} />
        </form>
    </div>
  );
}

export default ToDoForm;