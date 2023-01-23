import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function Header({appTitle}){
  return(
    <header>

      <nav className="nav-header">
    
        <Link to="/">
        <img className="homeicon" src={require('../images/icon.png')} alt="logo" />  
        </Link>
        
        <Link to="/" >
          Home
        </Link> 
       
        <Link to="/pageAbout" >
          About
        </Link>

        <Link to="/PageFavourites">
          Favourites
        </Link>
        
      </nav>
          <input className="search-bar" type="text"  name="search">
        </input>
        
      
      
    </header>
    )
  
}

export default Header;