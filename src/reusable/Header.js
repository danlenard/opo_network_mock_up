import {Component} from 'react'

class Header extends Component {
  render(){
    return(
      <nav>
        <div className="site-title">
          {/* <h1>Opo Network</h1> */}
          <p>A mock up website</p>
        </div>
        <ul>
          <li><a href="/to-do-form">To Do Form</a></li>
          <li><a href="/to-do-list">To Do List</a></li>
          <li><a href="/outsourced-data">Displaying Data</a></li>
        </ul>
      </nav>
    )
  }
} 

export default Header