import React, { useState, useEffect } from 'react';
import { withRouter} from 'react-router-dom';
import {toast} from 'react-toastify';
import Header from '../../reusable/Header'
import * as API from '../../utils/API.js'

import { DataGrid } from '@material-ui/data-grid';

//table column
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'employee_name', headerName: 'Employee name', width: 250 },
  { field: 'employee_salary', headerName: 'Salary', width: 150 },
  { field: 'employee_age', headerName: 'Age', type: 'number', width: 110},
  // { field: 'profile_image', headerName: 'Profile Image', width: 150 }, hidden due to empty values
  ];


function DisplayData() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    API.getEmployees()
      .then((res) => {
        const {data} = res
        setEmployees(data)
        setIsLoading(false)
      })
      .catch((err)=>{
        setEmployees([])
        setIsLoading(false)
        const message = err.message || 'An error has occured'
        toast.error(message,'error');
        //send error message
      })
  },[])

  return (
    <div>
      <Header/>
      <h3 style={{textAlign: 'center'}}>Displaying Data</h3>
      <br/>
      {isLoading ? <div>Data is loading please wait...</div>
      : <div style={{ height: 700, width: '100%' }}>
          <DataGrid rows={employees} columns={columns} pageSize={10} isRowSelectable={false} />
        </div>
      }
      
    </div>
  );
}

export default withRouter(DisplayData);