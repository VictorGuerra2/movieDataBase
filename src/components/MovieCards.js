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
      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w200/${moviePoster}`} alt="Movie Poster" />
      <div className="movie-name"><p>{title}</p></div>
      <div className="release-date"><p>Release Date: {releaseDate}</p></div>
      <div className="add-to-favourites"><button>Add to Favourites</button></div>
    </div>            
    </>
  )
}

export default MovieCard;