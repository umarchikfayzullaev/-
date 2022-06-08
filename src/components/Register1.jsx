import React from 'react'
import "../styles/Register1/reg1.css"
import Logo from "../img/Rectangle (1).png"
import Donut from "../img/Torus.png"
import Cube from "../img/Cube.png"
import { Link } from 'react-router-dom'


function Register1() {
  return (
    <div className="reg_container">
        <div className="mr_container">
            <div className="head">
                
                <Link to='/' className='reg_img'><img src={Logo} alt="photo"/></Link>
                <p className="ru">RU</p>               
            </div>
            <div className="login">
                    <h1 className="login_text">Log in</h1>
                    <input className='reg_inp1' type="text" placeholder='Email'/>
                    <input className='reg_inp1' type="text" placeholder='Password'/>
                    <a href="" className="forget">Forgot your password?</a>
                    <Link to='/signup' className="reg_link">Register</Link>
                    <span>
                        <p className="help">Don`t have an account?</p>
                        <a href='' className='signup'>Sign up</a>
                    </span>
                </div>
                <img src={Donut} alt="" className="donut" />
        <img src={Cube} alt="" className="cube" />
        </div>
        
    </div>
  )
}

export default Register1