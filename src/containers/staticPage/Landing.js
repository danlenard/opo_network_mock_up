import React from 'react';
import { withRouter } from 'react-router';
import Headers from '../../reusable/Header'

function Landing(){
  return(
    <div>
      <Headers/> 
      <h2>Please click on tabs on top right to go to other page</h2>
    </div>
  )
}

export default withRouter(Landing)