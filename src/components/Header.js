import { Link } from "react-router-dom";
import SearchBar from "./SerachBar";

function Header({appTitle}) {
    return (
    <header>
        <Link to="/">
                <h1>movieDataBase.</h1>
                </Link>
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