import React from 'react'
import "../styles/Paid/paid.css"
import Book from "../img/Rectangle 19.png"
import { Link } from 'react-router-dom'

function Paid() {
  return (
    <div>
            <div className="pm_container">
                <h1 className="paid_text">Paid courses</h1>
                <ul className="paid_ul">
                    <li className="paid_li">
                        <img src={Book} alt="" className="paid_img" />
                        <p className="paid_text2">3Ds Max - Start</p>
                        <span>
                            <p className="paid">$59.99</p>
                            <Link className='paid_link' to='/payment'><i class="fa-solid fa-bag-shopping"></i>Purchase</Link>
                        </span>
                    </li>
                    <li className="paid_li">
                        <img src={Book} alt="" className="paid_img" />
                        <p className="paid_text2">3Ds Max - Start</p>
                        <span>
                            <p className="paid">$59.99</p>
                            <Link className='paid_link' to='/payment'><i class="fa-solid fa-bag-shopping"></i>Purchase</Link>
                        </span>
                    </li>
                    <li className="paid_li">
                        <img src={Book} alt="" className="paid_img" />
                        <p className="paid_text2">3Ds Max - Start</p>
                        <span>
                            <p className="paid">$59.99</p>
                            <Link className='paid_link' to='/payment'><i class="fa-solid fa-bag-shopping"></i>Purchase</Link>
                        </span>
                    </li>
                    <li className="paid_li">
                        <img src={Book} alt="" className="paid_img" />
                        <p className="paid_text2">3Ds Max - Start</p>
                        <span>
                            <p className="paid">$59.99</p>
                            <Link className='paid_link' to='/payment'><i class="fa-solid fa-bag-shopping"></i>Purchase</Link>
                        </span>
                    </li>
                    <li className="paid_li">
                        <img src={Book} alt="" className="paid_img" />
                        <p className="paid_text2">3Ds Max - Start</p>
                        <span>
                            <p className="paid">$59.99</p>
                            <Link className='paid_link' to='/payment'><i class="fa-solid fa-bag-shopping"></i>Purchase</Link>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Paid