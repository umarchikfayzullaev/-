import React from 'react'
import Logo from "../img/diziproNoBg 1.png"
import "../styles/Header2/header2.css"
import { Link } from 'react-router-dom'
import Photo from "../img/Ellipse 1.png"

function Header2() {
  return (
    <div>
        <header>
        <div className="mh2_container">
          <img src={Logo} alt="photo" className="header_img" />
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
          <span className='header_span12'>
            <select>
              <option className='opt' value="">En</option>
              <option className='opt' value="">Ru</option>
            </select>
            <span className='header_span21'>
              <Link className='header_link21' to='/order'>Order now</Link>
              <Link to="/chat" className="photo1">
                  <img src={Photo} alt="" className="photo_logo1" />
              </Link>
            </span>
          </span>
        </div>
    </header>
    </div>
  )
}

export default Header2