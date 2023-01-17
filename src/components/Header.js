import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header({appTitle}){
  return(
    <header>
      <nav>
        <Link to="/" >
          Home
        </Link>
        <Link to="/pageAbout" >
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header;