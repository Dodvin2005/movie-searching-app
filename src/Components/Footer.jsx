import React from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiInstagram } from 'react-icons/ci';


function Footer() {
  return (
    <div style={{ height: "350px", backgroundColor: "#3d3918" }} className='container-fluid p-5 text-light'>
      <div className='row'>
        <div className="col-lg-4">
          <h4 className='mb-3 fw-bolder'>Film World</h4>
          <p style={{ textAlign: 'justify',fontSize:"18px" }}>This website is a movie discovery platform created for people who love movies, stories, and entertainment. Our goal is to make it simple and enjoyable to explore movies, discover new favorites, and learn more about the films you love.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h3 className='mb-3  '> Contact-Us</h3>
          <p> <MdOutlineMailLock /> filmworld@gmail.com</p>
          <h5> <FaPhoneAlt /> 7736954028</h5>
          <div className='my-3'> Connect with Us
            <div className='fs-5'>
              <FaWhatsapp />
              <CiFacebook className='mx-3' />
              <CiInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center my-5'>Designed and Build with React</div>
    </div>
  )
}

export default Footer