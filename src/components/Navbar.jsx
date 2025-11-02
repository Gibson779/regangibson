import { Link } from "react-router-dom"

export default function Navbar(){
    return(
      <>
      <header className="header-entry">
        <div className="main-header-container">
          <Link to="/" className="header-link"> 
        <h1>REGAN GIBSON</h1>
        </Link>
        </div>
          <div className="navbar">
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
        
        </header>
        
      </>
      
    )
}

