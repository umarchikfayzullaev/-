import React from 'react'
import "../styles/Chat/chat.css"
import Photo from "../img/Ellipse 1.png"
import Photo2 from '../img/Rectangle 439 (1).png'
import Photo3 from '../img/Rectangle 445.png'
import Photo4 from '../img/Rectangle 441 (1).png'
import { Link } from 'react-router-dom'

function Chat() {
  return (
    <div className="chat_container">
      <div className="ms_container">
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

        <ul className="chat_list">
            <p className="chat_text3">Your orders</p>
              <li className="chat_item">
                <div className="imgs">
                  <img src={Photo2} alt="" className="chat_img2" />
                  <img src={Photo3} alt="" className="chat_img2" />
                  <img src={Photo4} alt="" className="chat_img2" />
                </div>
                <div className="animate">
                  <span className='spanz'>
                    <p className="animating_text">Animating</p>
                    <p className="text1">Budget:</p>
                    <p className="text2">$70 000</p>
                  </span>
                  <div className="spanw">
                    <div className="process">
                      <p className="process_text1">Process:</p>
                      <div className="deadred">
                        <div className="red"></div>
                      </div>
                      <p className="subtext">23 hours left</p>
                    </div>

                    <div className="deadline">
                      <span className='text_span'>
                        <p className="dead_text">Deadline:</p> 
                        <p className="dead_num">12/10/2021</p>
                      </span>
                      <div className="deadgreen">
                        <div className="green"></div>
                      </div>
                      <p className="subtext">Remained: 20 hours</p>
                    </div>
                  </div>
                  
                </div>
                <div className="part3">
                  <div className="part3_top">
                    <Link className='p3t_text' to="NoOrder">View your order</Link>
                    <Link className="p3t_link" to="/chat2">Go to chat</Link> 
                  </div>
                  <div className="part3_bottom">
                    <p className="p3b_text">Edit</p>
                    <a href=' ' className="p3b_link">Cancel the order</a>
                  </div>
                </div>
              </li>
              <li className="chat_item">
                <div className="imgs">
                  <img src={Photo2} alt="" className="chat_img2" />
                  <img src={Photo3} alt="" className="chat_img2" />
                  <img src={Photo4} alt="" className="chat_img2" />
                </div>
                <div className="animate">
                  <span className='spanz'>
                    <p className="animating_text">Animating</p>
                    <p className="text1">Budget:</p>
                    <p className="text2">$70 000</p>
                  </span>
                  <div className="spanw">
                    <div className="process">
                      <p className="process_text1">Process:</p>
                      <div className="deadred">
                        <div className="red"></div>
                      </div>
                      <p className="subtext">23 hours left</p>
                    </div>

                    <div className="deadline">
                      <span className='text_span'>
                        <p className="dead_text">Deadline:</p> 
                        <p className="dead_num">12/10/2021</p>
                      </span>
                      <div className="deadgreen">
                        <div className="green"></div>
                      </div>
                      <p className="subtext">Remained: 20 hours</p>
                    </div>
                  </div>
                  
                </div>
                <div className="part3">
                  <div className="part3_top">
                    <a href="#" className="p4t_link">Your order is being processed</a>
                  </div>
                  <div className="part3_bottom">
                    <a href="#" className="p3b_link">Cancel the order</a>
                  </div>
                </div>
              </li>
              <li className="chat_item">
                <div className="imgs">
                  <img src={Photo2} alt="" className="chat_img2" />
                  <img src={Photo3} alt="" className="chat_img2" />
                  <img src={Photo4} alt="" className="chat_img2" />
                </div>
                <div className="animate">
                  <span className='spanz'>
                    <p className="animating_text">Animating</p>
                  </span>
                  <div className="spanw">
                    <div className="process">
                      <p className="process_text1">Process:</p>
                      <div className="deadred">
                        <div className="red"></div>
                      </div>
                      <p className="subtext">23 hours left</p>
                    </div>

                    <div className="deadline">
                      <span className='text_span'>
                        <p className="dead_text">Deadline:</p> 
                        <p className="dead_num">12/10/2021</p>
                      </span>
                      <div className="deadgreen">
                        <div className="green"></div>
                      </div>
                      <p className="subtext">Remained: 20 hours</p>
                    </div>
                  </div>
                  
                </div>
                <div className="part3">
                  <div className="part3_top">
                    <Link className='p3t_text' to="NoOrder">View your order</Link>
                    <Link className="p3t_link" to="/chat2">Go to chat</Link>
                  </div>
                  <div className="part3_bottom">
                    <p className="p3b_text">Edit</p>
                    <a href="#" className="p3b_link">Cancel the order</a>
                  </div>
                </div>
              </li>
              <li className='chat_item2'>
                <div className="images">
                  <img src={Photo2} alt="" className="ci2_img" />
                  <img src={Photo3} alt="" className="ci2_img" />
                  <img src={Photo4}alt="" className="ci2_img" />
                  <img src={Photo2} alt="" className="ci2_img" />
                  <img src={Photo3} alt="" className="ci2_img" />
                  <img src={Photo4} alt="" className="ci2_img" />
                  <img src={Photo2} alt="" className="ci2_img" /> 
                </div>
                <div className="footer">
                <div className="animate">
                  <span className='spanz'>
                    <p className="animating_text">Animating</p>
                    <p className="text1">Budget:</p>
                    <p className="text2">$70 000</p>
                  </span>
                  <div className="spanw">
                    <div className="process">
                      <p className="process_text1">Process:</p>
                      <div className="deadred">
                        <div className="red"></div>
                      </div>
                      <p className="subtext">23 hours left</p>
                    </div>

                    <div className="deadline">
                      <span className='text_span'>
                        <p className="dead_text">Deadline:</p> 
                        <p className="dead_num">12/10/2021</p>
                      </span>
                      <div className="deadgreen">
                        <div className="green"></div>
                      </div>
                      <p className="subtext">Remained: 20 hours</p>
                    </div>
                  </div>
                  
                </div>
                <div className="part3">
                  <div className="part3_top">
                    <Link className='p3t_text' to="NoOrder">View your order</Link>
                    <Link className="p3t_link" to="/chat2">Go to chat</Link>
                  </div>
                  <div className="part3_bottom">
                    <p className="p3b_text">Edit</p>
                    <a className="p3b_link">Cancel the order</a>
                  </div>
                </div>
                </div>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default Chat