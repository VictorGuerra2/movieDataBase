import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {apiUrlSearch} from '../Globals/globalVariables';
import MovieCard from "../components/MovieCards";
import isFavourite from "../utilities/isFavourite";
import {useSelector} from "react-redux";

function Search() {
    const [movies, setMovies] = useState([]);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

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
                    <h1>Resultados para {query}</h1>
                    {
                        movies.length > 0 &&
                        movies.map((movie, index) => <MovieCard
                            key={index}
                            movieObject={movie}
                            isFavourite={isFavourite(favourites, null, movie.id)}
                        />)
                    }
                </div>
            }
        </div>
    )
}

export default Search;