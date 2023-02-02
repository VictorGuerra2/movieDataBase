import React from 'react';
import {useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {apiKey, apiUrl} from "../Globals/globalVariables";
import axios from "axios";
import YouTube from "react-youtube";
import MovieCard from "../components/MovieCards";
import isFavourite from "../utilities/isFavourite";

function PageMovie() {
    const [movie, setMovie] = useState([]);
    const [creditsCast, setCreditsCast] = useState([]);
    const [creditsCrew, setCreditsCrew] = useState([]);
    const [runTimeMovie, setRunTimeMovie] = useState([]);

    const favourites = useSelector((state) => state.rootReduce.favouritesReducer.items);

    const location = useLocation();
    const {from} = location.state;

    async function getMovieData(id) {
        const {data} = await axios.get(`${apiUrl}${id}?api_key=${apiKey}`, {
            params: {
                append_to_response: 'credits,videos'
            }
        });

        const {cast, crew} = data.credits;

        const {runtime} = data;

        setMovie(data.videos.results);

        setCreditsCrew(crew);

        setCreditsCast(cast);

        setRunTimeMovie(runtime);

        return data;
    }

    useEffect(() => {
        getMovieData(from.id).then(r => r);
    }, [from.id]);

    function rendeTreiler() {
        const treiler = movie.find((vid) => vid.name.toLowerCase() === "official trailer");

        const treilerOther = movie.find((vid) => vid);

        const runTime = runTimeMovie;

        return (
            <div>
                {treiler === undefined ?
                    <YouTube videoId={treilerOther.key}/>
                    :
                    <YouTube videoId={treiler.key}/>
                }
                <p>Time:{runTime}</p>
            </div>

        );
    }

    function rendeCast() {
        const cast = creditsCast.find((cas) => cas);

        const castOther = creditsCast.slice(1, 3);

        const casOtherFind = castOther.find((cast) => cast);

        const castOtherLast = castOther.findLast((cast) => cast);

        const directing = creditsCrew.find((crew) => crew.known_for_department.toLowerCase() === "directing");

        const writing = creditsCrew.find((crew) => crew.known_for_department.toLowerCase() === "writing");

        return (
            <div>
                <div>Actor:{cast.name}</div>
                {
                    directing === undefined ?
                        <div>{casOtherFind.name}</div>
                        :
                        <div>Directing:{directing.name}</div>
                }
                {
                    writing === undefined ?
                        <div>{castOtherLast.name}</div>
                        :
                        <div>Writing:{writing.name}</div>
                }
            </div>
        );
    }

    const array = from.genre_ids;

    const my = [];

    if (array.includes(28)) {
        my.push('Action');
    }

    if (array.includes(12)) {
        my.push('Adventure');
    }

    if (array.includes(14)) {
        my.push('Fantasy');
    }

    if (array.includes(878)) {
        my.push('Science fiction');
    }

    if (array.includes(35)) {
        my.push('Comedy');
    }

    if (array.includes(53)) {
        my.push('Thriller');
    }

    if (array.includes(18)) {
        my.push('Drama');
    }

    if (array.includes(27)) {
        my.push('Terror');
    }

    if (array.includes(16)) {
        my.push('Animation');
    }

    if (array.includes(36)) {
        my.push('History');
    }

    if (array.includes(10752)) {
        my.push('War');
    }

    if (array.includes(80)) {
        my.push('Crime');
    }

    if (array.includes(9648)) {
        my.push('Mystery');
    }

    if (array.includes(10402)) {
        my.push('Music');
    }

    if (array.includes(10751)) {
        my.push('Family');
    }

    return (
        <div>
            <MovieCard
                movieObject={from}

                isFavourite={isFavourite(favourites, null, from.id)}
            />
                <div>{my.map((ele, index) => <div key={index}>{ele}</div>)}</div>
                <div>{from.original_language}</div>
                <div>{movie.length > 0 ? <div>{rendeTreiler()}</div> : <div>No Video</div>}</div>
                <div>{creditsCast.length > 0 ? <div>{rendeCast()}</div> : <div>No Cast</div>}</div>
        </div>
    );
}

export default PageMovie;