import { Link } from "react-router-dom";
import SearchBar from "./SerachBar";

function Header({appTitle}) {
    return (
    <header>
            <a href="/ovation/"><h1>movieDataBase.</h1></a>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/favourites">
                    Favourites
                </Link>
            </nav>
        <SearchBar/>
        </header>
        )
}

export default Header;