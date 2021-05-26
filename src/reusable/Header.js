import {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  render(){
    return(
      <nav>
        <div className="site-title">
          <h4>Dan Lenard</h4>
          <p>A mock up website</p>
        </div>
        <ul>
          <li><Link to="to-do-form">To Do Form</Link></li>
          <li><Link to="to-do-list">To Do List</Link></li>
          <li><Link to="outsourced-data">Displaying Data</Link></li>
        </ul>
      </nav>
    )
  }
} 

export default Header