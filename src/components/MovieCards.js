import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../features/favouritesSlice";



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
      <div className="release-date">Release Date: {releaseDate}</div>
      <div className="add-to-favourites"><button>Add to Favourites</button></div>
    </div>            
    </>
  )
}

export default MovieCard;