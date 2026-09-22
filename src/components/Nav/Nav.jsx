import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';
import logo from '../../assets/troop_405.png';
import { auth, db } from '../../firebase/init';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';



function Nav() {
   
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    
  



    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                setUser(user);
            }
        });
    }, []);

    function register() {
        console.log('register');
        createUserWithEmailAndPassword(auth, 'email@email.com', 'Test123')
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    function login() {
        signInWithEmailAndPassword(auth, 'email@email.com', 'Test123')
        .then(({user}) => {
            console.log(user);
            setUser(user);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    function logout() {
        signOut(auth);
        setUser({});
    }

    return (
        <nav>
            <div className="nav__row">
            <div className="nav__container">
                <div className="nav__logo">
                    <img src={logo} alt="Troop 405 Logo" />
                </div>
                <div className="nav__list">
                    <ul>
                        <li className="nav__item"><a href="#home">Home</a></li>
                        <li className="nav__item"><a href="#gallery">Gallery</a></li>
                        <li className="nav__item"><a href="#contact">Contact</a></li>
                        <li className='nav__item'><a href='https://my.scouting.org/online-registration/414df499-d7b2-4c9b-b460-26bb584c97dc/applicant-type?zip=15601'>Join Us</a></li>
                        <li className="nav__item"><a onClick={login}>Login</a></li>
                        <li className='nav__item' onClick={register}><a>Register</a></li>
                        <li className='nav__item' onClick={logout}><a>Logout</a></li>
                    </ul>
                </div>
                <button className="btn__menu">
                    <FontAwesomeIcon icon="bars" />
                </button>
            </div>
            </div>
        </nav>
    );
}

export default Nav;
