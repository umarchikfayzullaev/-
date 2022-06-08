import React from 'react'
import "../styles/Mai/main.css"
import { Link } from 'react-router-dom'

function Main() {
  return (
        <main>
      <div className="main_container">
        <div className="mm_container">
          <p className="main_text">We provide you quality service on 3D Modelling</p>
          <p className='main_text2'>We have been providing reliable customer service for several years</p>
          <span className="main_span">        
            <Link className='main_link' to='/order'>Order a project</Link> 
            <Link className='main_link' to='/portfolio'>Our portfoio</Link>     
          </span>
        </div>
      </div>
    </main>
  )
}

export default Main