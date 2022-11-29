import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/main.css";
import React from "react";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Club sportiv municipal Suceava</h3>
      <nav ref={navRef}>
        <a href="/#">Acasa</a>

        <a href="/b">Meciuri</a>
        <a href="/b">Despre</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
