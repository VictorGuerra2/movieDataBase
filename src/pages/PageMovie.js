import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apiKey, apiUrl } from "../Globals/globalVariables";
import axios from "axios";
import YouTube from "react-youtube";
import MovieCard from "../components/MovieCards";
import isFavourite from "../utilities/isFavourite";

function PageMovie() {
  const [movie, setMovie] = useState([]);
  const [creditsCast, setCreditsCast] = useState([]);
  const [creditsCrew, setCreditsCrew] = useState([]);
  const [runTimeMovie, setRunTimeMovie] = useState([]);

  const favourites = useSelector(
    (state) => state.rootReduce.favouritesReducer.items
  );

  const location = useLocation();
  const { from } = location.state;

  async function getMovieData(id) {
    const { data } = await axios.get(`${apiUrl}${id}?api_key=${apiKey}`, {
      params: {
        append_to_response: "credits,videos",
      },
    });

    const { cast, crew } = data.credits;

    const { runtime } = data;

    setMovie(data.videos.results);

    setCreditsCrew(crew);

    setCreditsCast(cast);

    setRunTimeMovie(runtime);

    return data;
  }

  useEffect(() => {
    getMovieData(from.id).then((r) => r);
  }, [from.id]);

  function rendeTreiler() {
    const trailer = movie.find(
      (vid) => vid.name.toLowerCase() === "official trailer"
    );

    const trailerOther = movie.find((vid) => vid);

    const runTime = runTimeMovie;

    return (
      <div>
        {trailer === undefined ? (
          <YouTube videoId={trailerOther.key} />
        ) : (
          <YouTube videoId={trailer.key} />
        )}
        <p>Time:{runTime}</p>
      </div>
    );
  }

  function rendeCast() {
    const cast = creditsCast.find((cas) => cas);

    const castOther = creditsCast.slice(1, 3);

    const casOtherFind = castOther.find((cast) => cast);

    const castOtherLast = castOther.findLast((cast) => cast);

    const directing = creditsCrew.find(
      (crew) => crew.known_for_department.toLowerCase() === "directing"
    );

    const writing = creditsCrew.find(
      (crew) => crew.known_for_department.toLowerCase() === "writing"
    );

    return (
      <div>
        <p>Actor:{cast.name}</p>
        {directing === undefined ? (
          <p>{casOtherFind.name}</p>
        ) : (
          <p>Directing:{directing.name}</p>
        )}
        {writing === undefined ? (
          <p>{castOtherLast.name}</p>
        ) : (
          <p>Writing:{writing.name}</p>
        )}
      </div>
    );
  }

  const my = [];
  const iMap = () => {
    const arrayMy = from.genre_ids;

    const arrayMap = arrayMy.map((element) => element);

    const objectArray = [
      { name: "Action", number: 28 },
      { name: "Adventure", number: 12 },
      { name: "Fantasy", number: 14 },
      { name: "Science fiction", number: 878 },
      { name: "Comedy", number: 35 },
      { name: "Thriller", number: 53 },
      { name: "Drama", number: 18 },
      { name: "Horror", number: 27 },
      { name: "Animation", number: 16 },
      { name: "History", number: 36 },
      { name: "War", number: 10752 },
      { name: "Crime", number: 80 },
      { name: "Mystery", number: 9648 },
      { name: "Music", number: 10402 },
      { name: "Family", number: 10751 },
    ];
    const objectArrayMap = objectArray.map((element, index) => {
      if (arrayMap.includes(element.number)) {
        my.push(objectArray[index].name);
      }
      return my;
    });

    return objectArrayMap;
  };
  iMap();

  return (
    <div>
      <MovieCard
        movieObject={from}
        isFavourite={isFavourite(favourites, null, from.id)}
      />
      <div>
        {my.map((ele, index) => (
          <div key={index}>{ele}</div>
        ))}
      </div>
      <div>{from.original_language}</div>
      <div>
        {movie.length > 0 ? <div>{rendeTreiler()}</div> : <div>No Video</div>}
      </div>
      <div>
        {creditsCast.length > 0 ? <div>{rendeCast()}</div> : <div>No Cast</div>}
      </div>
    </div>
  );
}

export default PageMovie;
