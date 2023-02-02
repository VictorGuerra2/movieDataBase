import MovieCard from "../components/MovieCards";
import {useEffect, useState} from 'react';
import {apiKey} from '../Globals/globalVariables';
import axios from 'axios';
import {useSelector} from "react-redux";
import isFavourite from "../utilities/isFavourite";
import {Link} from "react-router-dom";

function PageLanding() {
    const [movieData, setMovieData] = useState();
    const [dropDownDisplay, setDropDown] = useState();

    const favourites = useSelector((state) => state.rootReduce.favouritesReducer.items);

    async function getMovieData(type) {
        try {
            let resp = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`);
            await setMovieData(resp.data.results.slice(0, 12));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieData('popular').then(r => r);
    }, []);

    function handleDropDown(event) {
        setDropDown(event.target.value);

        getMovieData(event.target.value).then(r => r);
    }

    return (
        <>
            <nav className="drop-down">
                <select onChange={handleDropDown} value={dropDownDisplay} name="drop-down">
                    <option value="popular">Popular</option>
                    <option value="now_playing">Now Playing</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </nav>
            <div className="movie-grid-container">
                {movieData?.map((movie, i) => {
                    return (
                        <div>
                            <MovieCard
                                key={i}
                                movieObject={movie}

                                isFavourite={isFavourite(favourites, null, movie.id)}
                            />
                            <div>
                                <button type="button">
                                    <Link to="/individual" state={{from: movie}}>
                                        More Info
                                    </Link>
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>
        </>
    )
}

export default PageLanding;