import './Styles/App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import Matches from './pages/Matches';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
          <NavBar />
          
          <Routes>
            {/* Not Found Route */}
            <Route path="/" element={<Home />} />
            
            {/* Home Route */ }
            <Route path="/home" element={<Home />} />

            {/* Info Route */}
            <Route path="/info" element={<Info />} />

            {/* Matches Route */}
            <Route path="/matches" element={<Matches />} />

            {/* Login Route */}
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;