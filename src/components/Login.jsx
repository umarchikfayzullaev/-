import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login/login.css"
import Logo from "../img/Rectangle (1).png"

function Login() {
  return (
    <div className="login_container">
        <div className="lm_container">
            <div className="head">
                <Link to="payment" className='login_link'><i class="fa-solid fa-chevron-left"></i>Back</Link>
                <img src={Logo} alt="" className="login_icon" />
                <p></p>
            </div>
            <div className="register">
                <div className="reg_head">
                    <a href="#" className="reg_link">Kirish</a>
                    <a href="#" className="reg_link">Ro`yxatdan o`tish</a>
                </div>
                <label>
                    <p className="email">Email</p>
                    <input type="email" name="" id="" className="inp1" placeholder='Email'/>
                </label>
                <label>
                    <p className="parol">Joriy parolingiz</p>
                    <input type="password" name="" id="" className="inp1" placeholder='Joriy parolingiz'/>
                </label>
                <a href="#" className="cant_open">Kira olmayapsizmi</a>
                <button className='open'>Kirish</button>
            </div>
        </div>
    </div>
  )
}

export default Login