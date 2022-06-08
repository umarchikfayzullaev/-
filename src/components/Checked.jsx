import React from 'react'
import "../styles/Check/checked.css"
import Check from "../img/check 1.png"
import { Link } from 'react-router-dom'

function Checked() {
  return (
    <div className="checked_container">
        <div className="cm_container">
            <img src={Check} alt="" className="check" />
            <p className="check_text">Your order will be processed shortly and you will be notified.</p>
            <Link to='/' className="check_link">Return to home page</Link>
        </div>
    </div>
  )
}

export default Checked