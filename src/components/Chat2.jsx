import React from 'react'
import "../styles/Chat2/chat2.css"
import { Link } from 'react-router-dom'
import Photo from "../img/Ellipse 1.png"
import  Chat from "../img/chat.png"

function Chat2() {
  return (
    <div className="chat_container">
      <div className="schat_container">
        <div className="head">
          <Link className="head_link" to="/chat"><i class="fa-solid fa-chevron-left"></i>Back</Link>
          <p className="main">Chat</p>
          <p></p>
        </div>
        <span className='head_span1'>
            <img src={Photo} alt="" className="chat_img1" />
            <span className="chat_span2">
              <p className="chat_text1">Jaloliddin Esonboyev</p>
              <p className="chat_text2">jaloliddinrmcf03@gmail.com</p>
            </span>
          </span>
          <img src={Chat} alt="" className="chat" />
      </div>
    </div>
  )
}

export default Chat2