import { Link } from "react-router-dom"
import { useState } from "react";

export default function Navbar(){


    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };


    return(
      <>
      <header className="header-entry">
        <div className="main-header-container">
          <Link to="/" className="header-link"> 
        <h1>REGAN GIBSON</h1>
        </Link>
        </div>



          <div className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/" className="home-link">
            <h1>Home</h1>
            </Link>
             <Link to="/about" className="about-link">
             <h1>About</h1>
             </Link>
              <Link to="/contact" className="contact-link">
             <h1>Contact</h1>
             </Link>
          </div>
          
         
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        </header>
        
      </>
      
    )
}

