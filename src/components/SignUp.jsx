import React from 'react'
import "../styles/SignUp/signup.css"
import Logo from "../img/Rectangle (1).png"
import Donut from "../img/Torus.png"
import Cube from "../img/Cube.png"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="sign_container">
        <div className="sm_container">
            <div className="head">                
                <Link className='reg_img' to='/'><img src={Logo} alt="" /></Link>
                <p className="ru">RU</p>               
            </div>
            <div className="sign">
                <h1 className="sign_text">Sign up</h1>
                <input type="text" className="sign_inp" placeholder='Your name'/>
                <input type="email" className="sign_inp" placeholder='Email'/>
                <input type="password" className="sign_inp" placeholder='Password'/>

                <label>
                <p className="gender">Gender</p>
                <span>
                    <a href="" className="gen_btn">Male</a>
                    <a href="" className="gen_btn">Female</a>
                    <a href="" className="gen_btn">Others</a>
                </span>
                </label >
                <select className='select'>
                    <option value="">Country</option>
                    <option value="uz">Uzbekistan</option>
                    <option value="uz">Uzbekistan</option>
                    <option value="uz">Uzbekistan</option>
                </select>
                <p className="sign_text2">
                    By clicking Create account, I agree that I have read and accepted the <a href="#">Terms of Use</a> and <a href="#">Privacy policy</a>
                </p>
                <Link to="/" className="sign_link">Next to Home</Link>
                <p className="sign_text3">Already have an account? <Link to='/register'>Log in</Link></p>
            </div>
            <img src={Donut} alt="" className="donut" />
        <img src={Cube} alt="" className="cube" />
        </div>

        
    </div>
  )
}

export default SignUp