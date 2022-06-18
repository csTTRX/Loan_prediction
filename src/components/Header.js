import React from 'react'
import logo from '../logo.png'
import { Link , Outlet} from 'react-router-dom'
const Header = () => {

  return (
    <div className='nav'>
    <nav className='nav-content'>
      <div className='logo'> <Link to ='/'><img src={logo} alt = 'logo'></img></Link></div>
      <ul>
      <li>
          <Link to ='/'>Home</Link>
      </li>
      <li>
          <Link to ='/make-prediction'> Loan Application</Link>
      </li>
      <li>
          <Link to ='/app-info'>App info</Link>
      </li>
      </ul>
    </nav>
    <Outlet />
  </div>
  )
}

export default Header
