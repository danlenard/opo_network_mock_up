import React, { createContext, useContext, useState, useEffect } from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import Header from '../../reusable/Header'
import * as API from '../../utils/API.js'

import { DataGrid } from '@material-ui/data-grid';

//table column
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'employee_name', headerName: 'E name', width: 150 },
  { field: 'employee_salary', headerName: 'Salary', width: 150 },
  { field: 'employee_age', headerName: 'Age', type: 'number', width: 110},
  { field: 'profile_image', headerName: 'Profile Image', width: 150 },
  ];


function DisplayData() {
  const [employees, setEmployees] = useState([]);
//   urlSearch = qs.parse(this.props.history.location.search)
//   state = {
//     data : this.props.data || {}, 
//     id : this.props.match.params.id, 
//     isLoading: false,
//     loadMessage: 'Processing...',
//     listDetails: {
//       title: ({original})=>original.code,
//       showStatus: true,
//       data: [
//         {
//           title: 'Details',
//           items: [
//             { name: "code" },
//             { name: "name" },
//             { name: "description"},
//             { name: "created", ...CONTENT_DATE},
//             { name: "updated", ...CONTENT_DATE}
//           ]
//         },
//       ]
//     },
//   }

  useEffect(()=>{
    API.getEmployees()
      .then((res) => {
        const {data} = res
        setEmployees(data)
      })
      .catch((err)=>{
        setEmployees([])
        const message = err.message || 'An error has occured'
        toast.error(message,'error');
        //send error message
      })
  },[])

  return (
    <div>
      <Header/>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid rows={employees} columns={columns} pageSize={10} isRowSelectable={false} />
      </div>
    </div>
  );
}

export default withRouter(DisplayData);