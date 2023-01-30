import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './pages/user.js';
import Home from './pages/home.js';
import JoinForm from './pages/join.js';
import Gigs from './pages/gigs.js';
import Creategig from './pages/creategigs.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/join' element={<JoinForm/>} exact />
          <Route path='/user' element={<User/>} exact />
          <Route path='/gigs' element={<Gigs/>} exact />
          <Route path='/create-gig' element={<Creategig/>} exact />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
