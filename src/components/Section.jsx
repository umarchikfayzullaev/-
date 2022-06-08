import React from 'react'
import "../styles/Section/section.css"
import Section_photo1 from "../img/Group 77.png"
import service_icon1 from "../img/cubes 1.png"
import service_icon2 from "../img/layers.png"
import service_icon3 from "../img/3d (1) 1.png"
import Main from './Main'
import { Link } from 'react-router-dom'

function Section() {
  return (
    <div>
        <Main />
        <section>
      <div className="section_container">
        <div className="ms_container">
          <h1 className="section_text">Our results</h1>
            <ul className="section_ul1">
              <li className="section_li1">
                <div className="icon">
                  <i class="fa-solid fa-trophy"></i>
                </div>
                <p className="section_text2">25 000+</p>
                <p className="section_text3">Muvaffaqiyatli loyihalar</p>
              </li>
              <li className="section_li1">
                <div className="icon">
                <i class="fa-solid fa-shield"></i>
                </div>
                <p className="section_text2">25 000+</p>
                <p className="section_text3">Muvaffaqiyatli loyihalar</p>
              </li>
              <li className="section_li1">
                <div className="icon">
                <i class="fa-solid fa-rocket"></i>
                </div>
                <p className="section_text2">25 000+</p>
                <p className="section_text3">Muvaffaqiyatli loyihalar</p>
              </li>
            </ul>

            <div className="section_box">
              <div className="section_box1">
                <img src={Section_photo1} alt="photo" className="sb1_img" />
              </div>
              <div className="section_box2">
                <p className="sb2_text">About us</p>
                <p className="sb2_subtext">We create digital experiences fully crafted to support your brand. Leveraging on web standards, usability and best practices, the results are fast, responsive, and mobile-optimized. We develop sites to deliver online conversions and frictionless user engagement. Designing flexible and easy to manage back-end foundations with a goal of crafting innovative, future-proofed web solutions.
                <br /><br />
                We create digital experiences fully crafted to support your brand. Leveraging on web standards, usability and best practices, the results are fast, responsive, and mobile-optimized. We develop sites to deliver online
                </p>
              </div>
            </div>

            <div className="section_galery">
              <p className="galery_text">Our works</p>
              <ul className="galery_list">
                <li className="galery_item1">
                  <p>New house interior</p>
                </li>
                <li className="galery_item2">
                  <p>New house interior </p>
                </li>
                <li className="galery_item3">
                  <p>New house interior </p>
                </li>
                <li className="galery_item4">
                  <p>New house interior</p>
                </li>
                <li className="galery_item5">
                  <p>New house interior</p>
                </li>
                <li className="galery_item6">
                  <p>New house interior</p>
                </li>
              </ul>
              <Link className='galery_link' to='/portfolio'>See more<i class="fa-solid fa-arrow-right"></i></Link>
            </div>

            <div className="section_service">
              <p className="service_text">Our services</p>
              <ul className="sevice_list">
                <li className="service_item">
                  <div className="service_icon"><img src={service_icon3} alt="" /></div>
                  <h2>25 000+</h2>
                  <p>muvafaqiyatli loyihalar</p>
                </li>
                <li className="service_item">
                  <div className="service_icon"><img src={service_icon2} alt="" /></div>
                  <h2>25 000+</h2>
                  <p>muvafaqiyatli loyihalar</p>
                </li>
                <li className="service_item">
                  <div className="service_icon"><img src={service_icon1} alt="" /></div>
                  <h2>25 000+</h2>
                  <p>muvafaqiyatli loyihalar</p>
                </li>
              </ul>
              <Link className='service_link' to='/order'>Order a project</Link>
              
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Section