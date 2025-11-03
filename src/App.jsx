import './App.css'
import { Routes, Route} from "react-router";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";



function App() {

  return (
      <>
        
            <Navbar/>
            <Routes>
              <Route path= "/" element= {<Home/>}/>
              <Route path= "/about" element= {<About/>}/>
              <Route path= "/contact" element= {<Contact/>}/>
            </Routes>
            <Footer/>
          
           
        </> 
  )
}

export default App;
