import React from 'react'
import "../styles/Payment/payment.css"
import Card from "../img/basicCreditCard 1.png"
import { Link } from 'react-router-dom'

function Payment() {
  return (
      <div className="pm_container">
        <Link to="/" className="payment_link"><i class="fa-solid fa-chevron-left"></i>Go to Home page</Link>
        <div className="payment_box">
          <div className="p_box1">
            <label>
              <p className="l1_text">Card holder name</p>
              <input className='inp1' type="text"/>
            </label>
            <label>
              <p className="l1_text2">Card number</p>
              <input className='inp1' type="number"/>
            </label>
            <div className="label">
              <label>
                <p className="l1_text3">Expiry date</p>
                <input className='inp2' type="date"/>
              </label>
              <label>
                <p className="l1_text3">CVV code</p>
                <input className='inp2' type="password" />
              </label>
              
            </div>
            <div className="payment">
                <span className="payment_span1">
                  <p className="total_payment">Total payment (100%):</p>
                  <p className="have_pay">The amount you have to pay (30%):</p>
                </span>
                <span className="payment_span2">
                  <p className="sum1">$50 000</p>
                  <p className="sum2">$15 000</p>
                </span>
            </div>
            <Link className='submit' to='login'>Submit</Link>
          </div>
          <div className="p_box2">
            <img src={Card} alt="" className="payment_card" />
            <p className="pb2_text"> You must spend 30 % of the total amount to get started.</p>
          </div>
        </div>
      </div>
  )
}

export default Payment