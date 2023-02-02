import React from 'react';
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
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200/${movieObject.poster_path}`} alt="Movie Poster"/>
        <p className="movie-title">{movieObject.title}</p>
        <p className="movie-overview">{movieObject.overview}</p>
        <p className="movie-release-date">{movieObject.release_date.slice(0, 4)}</p>
        <p className="movie-rating">{movieObject.vote_average} / 10</p>
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