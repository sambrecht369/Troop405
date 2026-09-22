import React from 'react'
import './Home.css'
import logo from '../../assets/fdl.png'
import tent from '../../assets/tent.png'
import games from '../../assets/dices.png'
import community from '../../assets/public-service.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSpinner,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';




const Home = () => {






  return (
    <div className='home'>
  
      <h1 className="title">Welcome to our Troop!</h1>
      <div className="sub__title--container">
        <img className='sub__title--img' src={logo} alt="fleur de lis" />
      <h2 className="sub__title">Troop 405</h2>
        <img className='sub__title--img' src={logo} alt="fleur de lis" />
      </div>
     <p className="home__para">We are a group of dedicated scouts working together to make a difference in our community.
      <br />We are a family troop. We accept all middle and high school aged youth who are interested in scouting.
      </p>
      <button className="join__btn">
        <a href="https://my.scouting.org/online-registration/414df499-d7b2-4c9b-b460-26bb584c97dc/applicant-type?zip=15601">Join Us</a>
      </button>
  
      <section id='gallery'>
      <div className="gallery__container">
        <h2 className="gallery__title">Our Gallery</h2>
        <div className="gallery__images">
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/troop-flag.jpg')} alt="Gallery Image 1" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/camping.jpg')} alt="Gallery Image 2" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/robot.jpg')} alt="Gallery Image 3" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/flag.jpg')} alt="Gallery Image 4" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/hiking3.jpg')} alt="Gallery Image 5" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/hiking.jpg')} alt="Gallery Image 6" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/games.jpg')} alt="Gallery Image 7" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/camping2.jpg')} alt="Gallery Image 8" />
          </div>
          <div className="gallery__item">
            <img className="gallery__image" src={require('../../assets/snake.jpg')} alt="Gallery Image 9" />
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Home
