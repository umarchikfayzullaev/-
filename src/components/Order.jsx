import React from 'react'
import newyork from "../img/newyork.png"
import india from "../img/india.png"
import china from "../img/china.png"
import "../styles/Order/order.css"
import { Link } from 'react-router-dom'

function Order() {
  return (  
      <div className="container">
        <div className='head'>
          <Link className='gotohome' to='/'>Go to Home page</Link> 
          <h1 className="main">Order a project</h1>
          <p></p>
        </div>
        <div className="imput1">
          <div className="text1">
            <p className="title">Title</p>
            <p className="num">0/80</p>
          </div>
          <input className='title_inp' type="text" placeholder='Type here'/>
        </div>
        <div className="imput2">
          <div className="text2">
            <p className='dis'>Discription</p>
          </div>
          <input className='dis_inp' type="text" placeholder='Type here ' />
        </div>

        <div className="select">

          <div className='menu-bar'>
            <p className='select_text'>Select 3D skills</p>
              <div className="dropdown">
                <ul className='drop_ul'>
                  <li className='drop_li'>
                    <span className='drop_span'>
                      <input type="checkbox"/>
                      <p className='drop_text'>3D Modelling</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>3D Print Modelling</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>3D Scanning</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Animating</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Lighting</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Low Poly Modelling</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Particles</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>PBR Modelling</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Rendering</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Rigging</p>
                    </span>   
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Shaders</p>
                    </span>  
                    <span className='drop_span'>
                      <input color='green' type="checkbox" />
                      <p className='drop_text'>Skinning</p>
                    </span> 
                    <span className='drop_span'>
                      <input color='green' type="checkbox" />
                      <p className='drop_text'>Skinning</p>
                    </span> 
                    <span className='drop_span'>
                      <input color='green' type="checkbox" />
                      <p className='drop_text'>Skinning</p>
                    </span>    
                  </li>
                </ul>
              </div>
          </div>
          <div className='menu-bar'>
            <p className='select_text'>Select 3D software</p>
              <div className="dropdown">
                <ul className='drop_ul'>
                  <li className='drop_li'>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Autodesk 3Ds Max</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>OBJ</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>3D Studio</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Autodesk FBX</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Zbrush</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Substance Designer</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Lumion</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>GrowFX</p>
                    </span> 
                    <span className='drop_span1'>
                      <input type="checkbox" />
                      <p className='drop_text'>3Ds Max Material Library</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>PDF</p>
                    </span>     
                  </li>
                </ul>
              </div>
          </div>
        </div>

        <div className="upload">
          <p className="upload_text">Upload image</p>
          <div className="upload-box">
              <div className="upload_img">
                <img src={china} alt="rasm" className="upload_image" />
                <img src={newyork} alt="rasm" className="upload_image" />
                <img src={india} alt="rasm" className="upload_image" />
              </div>
              <div className="upload_browse">
                  <p className="droptag">Drag or drop reference image here </p>
                  <p>or</p>
                  <a href="#" className="browse">Browse</a>
              </div>
          </div>
        </div>

        <div className="deadline">
          <input type="date" className="deadline_input"/>
          <span>
            <input type="checkbox" />
            <p>No fixe deadline</p>
          </span>
          <label>
            <input className='deadline_number' type="number" placeholder='Budjet'/>
          </label>
        </div>

        <span className="order-span">
          <a href="" className="order_cancel">Cancel</a>
          <Link className='order_start' to='checked'>Start project</Link>
        </span>
      </div>
  )
}

export default Order