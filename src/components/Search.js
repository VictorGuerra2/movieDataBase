import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {apiUrlSearch} from '../Globals/globalVariables';
import MovieCard from "../components/MovieCards";
import isFavourite from "../utilities/isFavourite";
import {useSelector} from "react-redux";

function Search() {
    const [movies, setMovies] = useState([]);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q'); //inputOfSearch

    const favourites = useSelector((state) => state.rootReduce.favouritesReducer.items);

    async function getMovieData(url) {
        const res = await fetch(url);

        const data = await res.json();

        setMovies(data.results);
    }

    useEffect(() => {
        const resultUrl = `${apiUrlSearch}&query=${query}`;
        getMovieData(resultUrl).then(r => r);
    }, [query]);

    return (
        <div>
            {
                <div className="movie-grid-container">
                    <Link className="home-icon-src-top" to="/">
                        <img className="home-icon-top" src={require('../images/icon.png')} alt="logo" />  
                    </Link>
                    <h1>Results: {query}</h1>
                    {
                        movies.length > 0 &&
                        movies.map((movie, index) => <div>
                                <MovieCard
                                    key={index}
                                    movieObject={movie}
                                    isFavourite={isFavourite(favourites, null, movie.id)}
                                />

                                <button type="button">
                                    <Link to="/individual" state={{from: movie}}>
                                        More Info
                                    </Link>
                                </button>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default Search;