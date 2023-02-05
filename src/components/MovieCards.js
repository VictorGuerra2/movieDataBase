import React from 'react';
import {useDispatch} from "react-redux";
import {addFavourite, removeFavourite} from "../features/favouritesSlice";
import FavouriteButton from "../components/FavouriteButton";
import {Link} from "react-router-dom";

function MovieCard({movieObject, isFavourite, credits}) {
  const dispatch = useDispatch();
  console.log()
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
        <div className="movie-poster">
          <img className="movie-poster-img" src={`https://image.tmdb.org/t/p/w200/${movieObject.poster_path}`} alt="Movie Poster"/>
          <button className="more-info" type="button">
            <Link to="/individual" state={{from: movieObject}}>
              More Info
            </Link>                                     
          </button>
        </div>
        <div className="movie-card-text">
          <div className="top-cluster">
          <Link to="/single" state={{from: movieObject}}>
              More Info
            </Link>  
            <p className="movie-title movie-text">{movieObject.title}</p>
            {/* <p className="movie-overview movie-text">{movieObject.overview.slice(0,99) + "..."}</p> */}
            <p className="movie-release-date movie-text">{movieObject.release_date.slice(0, 4)}</p>
          </div>
          <div className="bottom-row-container">
            <p className="movie-vote-average movie-text">{movieObject.vote_average} / 10</p>
           
            
            
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
    </div>
  );
}

export default MovieCard;