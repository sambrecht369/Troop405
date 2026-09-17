
import Footer from './components/Footer/Footer.jsx';
import Nav from './components/Nav/Nav.jsx';
import Home from './pages/Home/Home.jsx';
import {auth} from './firebase/init.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {


  
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
