import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function Header({appTitle}){
  return(
    <header>
      <nav>
        
        
        <Link to="/" >
        
        <img src={require('../images/logoholder.png')} alt="logo" />  
          Home
        </Link> 
       
        <Link to="/pageAbout" >
          About
        </Link>
        <Link to="/PageFavourites">
          Favourites
        </Link>
        <input type="text" value="search" name>
        </input>
      </nav>
    </header>
    )
  
}

export default Header;