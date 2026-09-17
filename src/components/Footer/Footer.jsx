import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <div className='footer'>
     <div className="footer__container">
      <div className="footer__anchor">
        <a href="#home" className="footer__anchor--link" />
        <a className="footer__logo" href='#'>
            <img src={require('../../assets/troop_405.png')} alt="Troop 405 Logo"/>
            
        </a>
        <span className="footer__logo--popper">
            Top
            <FontAwesomeIcon icon={faArrowUpLong} />
        </span>
      </div>
      <div className="nav__footer">
        <ul>
          <li className='footer__nav--item'><a href="#">Home</a></li>
          <li className='footer__nav--item'><a href="#gallery">Gallery</a></li>
          <li className='footer__nav--item'><a href='https://my.scouting.org/online-registration/414df499-d7b2-4c9b-b460-26bb584c97dc/applicant-type?zip=15601'>Join Us</a></li>
          <li className='footer__nav--item'><a href="#contact">Contact</a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer