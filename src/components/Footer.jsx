import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <>
        <footer >
             
            <div className="links">
            <Link to="/" className="footer-link">
            <p>Home</p>
            </Link>
            <Link to="/about" className="footer-link">
             <p>About</p>
             </Link>
              <Link to="/contact" className="footer-link">
             <p>Contact</p>
             </Link>
          
            
                    
            </div>
        
            <div className="copyright">

            <p> © copyright 2025 Regan Gibson  All Rights Reserved. </p>
            
            <p> Developer Regan Gibosn</p>

            </div>
           

            
        </footer>
        </>
    )
}

