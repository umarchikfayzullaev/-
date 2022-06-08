import React from 'react'
import "../styles/Settings/setting.css"
import { Link } from 'react-router-dom'
import Photo from "../img/Ellipse 1.png"

function Settings() {
  return (
    <div className="settings_container">
        <div className="ss_container">
            <div className="head">
                <Link to="/chat" className="head_link"><i class="fa-solid fa-chevron-left"></i>Back</Link>
                <p className="main">Settings</p>
                <p></p>
            </div>

            <span className='head_span1'>
            <img src={Photo} alt="" className="chat_img1" />
                <span className="chat_span2">
                <p className="chat_text1">Jaloliddin Esonboyev</p>
                <p className="chat_text2">jaloliddinrmcf03@gmail.com</p>
                </span>
            </span>

            <ul className="settings_list">
                <li className="settings_item">
                    <p className="item_text1"><i class="fa-regular fa-user"></i>Your name</p>
                    <input type="text" className="list_inp" placeholder='Jaloliddin Esonboyev'/>
                    <i class="fa-solid fa-chevron-down"></i>
                </li>
                <li className="settings_item">
                    <p className="item_text1"><i class="fa-regular fa-envelope"></i>E-mail  </p>
                    <input type="text" className="list_inp" placeholder='jaloliddinrmcf03@gmail.com'/>
                    <i class="fa-solid fa-chevron-down"></i>
                </li>
                <li className="settings_item">
                    <p className="item_text1"><i class="fa-solid fa-mobile-screen"></i>Phone number</p>
                    <input type="email" className="list_inp" placeholder='(998)99 123-45-67'/>
                    <i class="fa-solid fa-chevron-down"></i>
                </li>
                <li className="settings_item">
                    <p className="item_text1"><i class="fa-solid fa-lock"></i>Change password</p>
                    <input type="password" className="list_inp" placeholder='•••••••••••••••••'/>
                    <i class="fa-solid fa-chevron-down"></i>
                </li>
                <li className="settings_item">
                    <p className="item_text1"><i class="fa-solid fa-box-open"></i>My orders</p>
                    <input type="text" className="list_inp" placeholder='7 orders'/>
                    <i class="fa-solid fa-chevron-down"></i>
                </li>
            </ul>

            <Link to="/" className="settings_linkb"><i class="fa-solid fa-diagram-next"></i>Log out</Link>

        </div>
    </div>
  )
}

export default Settings