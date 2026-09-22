import React from 'react';
import tent from '../../assets/tent.png'
import games from '../../assets/dices.png'
import community from '../../assets/public-service.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSpinner, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';




const Contact = () => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  function closeModal() {
    setIsModalOpen(false);
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
  }

  function contact(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs.sendForm('sam_brecht', 'template_bj8258e', e.target, 'AZABaUq5FwPR3MPhh')
      .then((result) => {
        setIsLoading(false);
        setIsSuccess(true);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);
      });
  }

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }





  return (
    <div className="contact">
    <div className={`modal ${isModalOpen ? 'modal--open' : ''}`}>
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
          <button className="exit" onClick={closeModal} type="button">
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
                    <button id="contact__submit" className ="form__submit" type="submit">
                        Submit
                    </button>
                </form>
          {isLoading && (
            <div className="modal__overlay modal__overlay--loading modal__overlay--visible">
              <FontAwesomeIcon className="faSpinner" icon={faSpinner} />
            </div>
          )}
          {isSuccess && (
            <div className="modal__overlay modal__overlay--success modal__overlay--visible">
              <div className='modal__overlay-p'>Thank you for your message! We will get back to you as soon as possible.</div>
              <button className='x__icon--success' type="button" onClick={closeModal}>
                <FontAwesomeIcon className='x-icon' icon={faXmark} />
              </button>
            </div>
          )}
          {isError && (
            <div className="modal__overlay modal__overlay--error modal__overlay--visible">
              <div className='modal__overlay-p'>The email service is currently unavailable. Please try contacting us directly at email@email.com.</div>
              <button className='x__icon--success' type="button" onClick={closeModal}>
                <FontAwesomeIcon className='x-icon' icon={faXmark} />
              </button>
            </div>
          )}
        </div>
      </div>
        <button className="contact-btn" onClick={toggleModal}>
            <FontAwesomeIcon className='e-icon' icon={faEnvelope} />
        </button>
    </div>
  );
};

export default Contact;