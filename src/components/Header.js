import React from 'react'
import logo from '../logo.png'
import menu from '../menu.png'
import { Link , Outlet} from 'react-router-dom'
import { SvgIcon } from '@mui/material'
import { useState } from 'react'

const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const Menu = (
    <SvgIcon  
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="white" >

      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        clipRule="evenodd"
      /> 
    </SvgIcon>
  )
  return (
    <div className='nav'>
    <nav className='nav-content'>
      <div className='logo'> <Link to ='/'><img src={logo} alt = 'logo'></img></Link></div>

      <button className="hamburger" 
      onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {Menu}
      </button>
      <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
       }>
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
      </div>
    </nav>
  </div>
  )
}

export default Header
