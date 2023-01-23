import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../features/favouritesSlice";
// import Moment from 'moment'; // to format date received from API


function MovieCard({key,moviePoster,title,isFavourite,releaseDate }){
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      console.log(obj);
      dispatch(addFavourite(obj));
    } else {
      dispatch(removeFavourite(obj));
    }
  }

  return(
    <>
    <div key={key} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w300/${moviePoster}`} alt="Movie Poster" />
      <div className="movie-name">{title}</div>
      <div className="add-to-favourites">
      <div className="release-date">Release Date: {releaseDate}</div>
        <button>Add to Favourites</button>
      </div>
    </div>
    </>
  )
}

export default MovieCard;