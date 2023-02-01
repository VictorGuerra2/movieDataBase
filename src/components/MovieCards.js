import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addFavourite, removeFavourite} from "../features/favouritesSlice";
import FavouriteButton from "../components/FavouriteButton";

function MovieCard({movieObject, isFavourite}) {
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFavourite(obj));
    } else {
      dispatch(removeFavourite(obj));
    }
  }

  return (
    <div>
      <div id={movieObject.id} className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w300/${movieObject.poster_path}`} alt="Movie Poster"/>
        <div>
          <button type="button">
            <Link to="/individual" state={{from: movieObject}}>
              More Info
            </Link>
          </button>
        </div>
        <div className="movie-name">{movieObject.title}</div>
        <div>{movieObject.overview}</div>
        <div>{movieObject.release_date.slice(0, 4)}</div>
        <div>{movieObject.vote_average} / 10</div>
        <div className="add-to-favourites">
          {isFavourite ? (
            <FavouriteButton
              movieObject={movieObject}
              remove={true}
              handleFavClick={handleFavClick}/>
          ) : (
            <FavouriteButton
              movieObject={movieObject}
              handleFavClick={handleFavClick}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;