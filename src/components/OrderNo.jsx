import React from 'react'
import { Link } from 'react-router-dom'
import Photo from "../img/Ellipse 1.png"
import "../styles/OrderNo/orderno.css"
import Image from "../img/undraw_No_data_re_kwbl 1.png"

function OrderNo() {
  return (
    <div className="orderno_container">
        <div className="so_container">
        <div className="head">
          <span className='head_span1'>
            <img src={Photo} alt="" className="chat_img1" />
            <span className="chat_span2">
              <p className="chat_text1">Jaloliddin Esonboyev</p>
              <p className="chat_text2">jaloliddinrmcf03@gmail.com</p>
            </span>
          </span>

          <Link to="/settings" className="chat_link1"><i class="fa-solid fa-gear"></i>Settings</Link>
        </div>

        <img src={Image} alt="" className="orderno_img" />
        <p className='order_text'>You have not ordered yet</p>
        <Link to="order" className="order_link">Order now<i class="fa-solid fa-chevron-right"></i></Link>
        </div>
    </div>
  )
}

export default OrderNo