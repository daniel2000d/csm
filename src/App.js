import './Styles/App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import Matches from './pages/Matches';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
          <NavBar />
          
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Info Route */}
            <Route path="/info" element={<Info />} />

            {/* Matches Route */}
            <Route path="/matches" element={<Matches />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;