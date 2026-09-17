import React from 'react'
import './Home.css'
import logo from '../../assets/fdl.png'
import tent from '../../assets/tent.png'
import games from '../../assets/dices.png'
import community from '../../assets/public-service.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';




const Home = () => {

  function contact(e) {
  e.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading'); 
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');

  emailjs.sendForm('sam_brecht', 'template_bj8258e', e.target, 'AZABaUq5FwPR3MPhh')
    .then((result) => {
      loading.classList.remove('modal__overlay--visible');
      success.classList.add('modal__overlay--visible');
    })
    .catch((error) => {
      loading.classList.remove('modal__overlay--visible');
      alert('The email service is currently unavailable. Please try contacting us directly at email@email.com');
      });
}







  return (
    <div className='home'>
      <h1 className="title">Welcome to our Troop!</h1>  
      <div className="sub__title--container">
        <img className='sub__title--img' src={logo} alt="fleur de lis" />
      <h2 className="sub__title">Troop 405</h2>
        <img className='sub__title--img' src={logo} alt="fleur de lis" />
      </div>
     <p className="home__para">We are a group of dedicated scouts working together to make a difference in our community.
      <br />We are a family troop. We accept all middle and high school aged youth who are interested in scouting.<br />
           Join us on our journey of adventure, learning, and growth!
     </p>
     <button className="join__btn"><a href="https://my.scouting.org/online-registration/414df499-d7b2-4c9b-b460-26bb584c97dc/applicant-type?zip=15601">Join Us</a></button>
      <div className="modal">
        <div className="modal-half modal-about">
          <h3 className="modal-title">About Troop 405</h3>
          <p>We are a group of dedicated scouts working together to make a difference in our community and have fun while doing it!</p>
         
            <h4 className="activities-title">We love to:</h4>
          <div className="activities">
            <figure className="activities-item">
              <img className="activities-img" src={tent} alt="tent" />
              <figcaption className="activities-caption">Camp</figcaption>
            </figure>
            <figure className="activities-item">
                <img className="activities-img" src={games} alt="games" />
                <figcaption className="activities-caption">Play Games</figcaption>
            </figure>
            <figure className="activities-item">
                <img className="activities-img" src={community} alt="community" />
                <figcaption className="activities-caption">Community Service</figcaption>
            </figure>
          </div>
        </div>
        <div className="modal-half modal-contact">
          <button className="exit">
            <FontAwesomeIcon className='x-icon' icon={faXmark} />
          </button>
          <div className="contact-title">Contact Us</div>
           <form id="contact__form" className="contact_form" onSubmit={contact}>
                    <div className="form__item">
                        <label className="form__item--label" >Name</label>
                        <input name="user_name" className="input" type="text" required></input>
                    </div>
                     <div className="form__item">
                        <label className="form__item--label" >Email</label>
                        <input name="user_email" className="input" type="email" required></input>
                    </div>
                     <div className="form__item">
                        <label className="form__item--label" required>Message</label>
                        <textarea name="message" className="input" type="text"></textarea>
                    </div>
                    <button id="contact__submit" className ="form__submit">
                        Submit
                    </button>
                </form>
          <div className="modal__overlay modal__overlay--loading">
            <FontAwesomeIcon className="faSpinner" icon={faSpinner} />
          </div>
          <div className="model__overlay modal__overlay--success">
            <div className='modal__overlay-p' >Thank you for your message! We will get back to you as soon as possible.</div>
            <FontAwesomeIcon className='x__icon--success' icon={faXmark} />
          </div>
        </div>
      </div>
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
