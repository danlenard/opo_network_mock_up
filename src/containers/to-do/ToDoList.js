import React, {useContext, useState} from 'react'
import {withRouter} from 'react-router-dom';
import { GlobalContext } from '../../store/GlobalStore';
import Header from '../../reusable/Header'

import '../../ToDoList.css'
import { toast } from 'react-toastify';

function ToDoList(){
  //contexts
  const { state, dispatch } = useContext(GlobalContext);

  // states
  const [ isDeleteModalOpen, setDeleteModal ] = useState(false)
  const [ deleteToDo, setDeleteToDo ] = useState(null)

  function handleDeleteClick(i){
    if(i !== null){
      setDeleteToDo(i)
    }
    setDeleteModal(true)
  }

  function onConfirmDelete(){
    if(deleteToDo !== null){
      dispatch({type: 'DELETE_TO_DO', index: deleteToDo})
      toast.success('Successfully removed to do')
    } else {
      dispatch({type: 'DELETE_ALL_TO_DO'})
      toast.success('Successfully removed all to do')
    }
    setDeleteModal(false)
    setDeleteToDo(null)
    
  }

  function onCloseModal(){
    setDeleteModal(false)
    setDeleteToDo(null)
  }

  return(
    <div>
      <div className={`modal` + `${isDeleteModalOpen ? '-visible' : ''}`}></div>
        <Header/>
        <h3 className="h3-header">To Do Form</h3>
        <div className={`modal-content`+ `${isDeleteModalOpen ? '-visible' : ''}`}>
          <div className="modal-header">
            <span className="close" onClick={()=> onCloseModal()}>&times;</span>
            <h2>Delete Confirmation</h2>
          </div>
          <div className="modal-body">
            {deleteToDo !== null ? 
              <div>
                <p>Are you sure you want to remove this?</p>
                <br/>
                <p>{state.toDo.length ? state.toDo[deleteToDo || 0].title : ''} ({state.toDo.length ? state.toDo[deleteToDo || 0].date : ''})</p>
                <p>&nbsp;&nbsp;{'- '}{state.toDo.length ? state.toDo[deleteToDo || 0].description : ''}</p>
              </div>
            : <div>
              <p>Are you sure you want to remove all to do?</p>
            </div>
             }
            
          </div>
          <div className="modal-footer">
            <button className="button-cancel" onClick={()=> onCloseModal()}>cancel</button>
            <button className="button-del align-right" onClick={()=> onConfirmDelete()}>confirm</button>
          </div>
        </div>
        <button className={state.toDo.length ? 'button-del' : 'button-disabled'} onClick={(e)=>{handleDeleteClick(null)}} disabled={!state.toDo.length}>Delete All</button>
        <br/>
        <div className="container">
          {state.toDo.map((to_do, i)=><div className="card" key={i}>
              <div className="title">{to_do.title}</div>
              <div className="date">{'(' + to_do.date + ')'}</div>
              <hr/>
              <div className="description">{to_do.description}</div>
              <br/>
              <button onClick={(e)=>handleDeleteClick(i)}>Delete</button>
          </div>)}
          
        </div>
    </div>
  );
}

export default withRouter(ToDoList)