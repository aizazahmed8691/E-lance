import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './pages/user.js';
import Home from './pages/home.js';
import JoinForm from './pages/join.js';
import Gigs from './pages/gigs.js';
import Creategig from './pages/creategigs.js';
import Creategig2 from './pages/creategig2.js';
import Buyer from './pages/buyer';
import Postjob from './components/postjob';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mypost from './components/mypost';
import SigninForm from './components/signin';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/join' element={<JoinForm/>} exact />
          <Route path='/signin' element={<SigninForm/>} exact />
          <Route path='/user' element={<User/>} exact />
          <Route path='/gigs' element={<Gigs/>} exact />
          <Route path='/create-gig' element={<Creategig/>} exact />
          <Route path='/create-gig2' element={<Creategig2/>} exact />
          <Route path='/user-buyer' element={<Buyer/>} exact />
          <Route path='/postRequest' element={<Postjob/>} exact />
          <Route path='/mypost' element={<Mypost/>} exact />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
