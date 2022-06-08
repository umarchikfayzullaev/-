import React from 'react'
import Logo from "../img/diziproNoBg 1.png"
import "../styles/Footer/footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <footer>
      <div className="footer_container">
        <div className="mf_container">
          <p className="footer_text">Biz bilan hamkor boling</p>
          <p className="footer_subtext">Biz sifatli va ajoyib modellarni sizga taqdim qilamiz</p>
          <Link className='footer_link' to="/order">Order a project</Link>
          <div className="footer_box">
            <img className='footer_logo' src={Logo} alt="photo" />
            <div className="footer_box2">
              <Link className='footer_link2' to="/">Home</Link>
              <Link className='footer_link2' to="/">About us</Link>
              <Link className='footer_link2' to="/portfolio">Portfolio</Link>
              <Link className='footer_link2' to="/order">Order a project</Link>              
            </div>
            <span>
              <a href="#" className="footer_icon"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" className="footer_icon"><i class="fa-brands fa-telegram"></i></a>
              <a href="#" className="footer_icon"><i class="fa-brands fa-facebook-f"></i></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer