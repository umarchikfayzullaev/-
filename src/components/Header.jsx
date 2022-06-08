import React from 'react'
import Logo from "../img/diziproNoBg 1.png"
import "../styles/Header/header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
        <div className="mh_container">
          <img src={Logo} alt="image" className='header_img'/>
          <ul className="header_ul">
            <li className="header_li">
            <Link className='header_link1' to='/'>Home</Link>
            </li>
            <li className="header_li">
            <Link className='header_link1' to='/portfolio'>Portfolio</Link>
            </li>
            <li className="header_li">
            <Link className='header_link1' to='/order'>Order a project</Link>
            </li>
            <li className="header_li">
            <Link className='header_link1' to='/paid'>Paid courses</Link>
            </li> 
            <li className="header_li">
            <Link className='header_link1' to='/chat'>Profile</Link>
            </li>
          </ul>
          <div className='header_span1'>
            <select>
              <option className='opt' value="">En</option>
              <option className='opt' value="">Ru</option>
            </select>
            <div className='header_span2'>
              <Link className='header_link2' to='/order'>Order now</Link>
              <Link className='header_link2' to='/register'>Register</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header