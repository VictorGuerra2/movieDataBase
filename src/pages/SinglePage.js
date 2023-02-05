import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { apiKey, apiUrl } from "../Globals/globalVariables";
import axios from "axios";
import YouTube from "react-youtube";
import MovieCard from "../components/MovieCards";
import isFavourite from "../utilities/isFavourite";
import {Link} from "react-router-dom";

function SinglePage(){
  const [movie, setMovie] = useState();
  const location = useLocation();
  const movieId = location.state.from.id
  async function getMovieData(movieId){
    const  resp  = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a72327080c668f440898446bda41785e&language=en-US&append_to_response=videos,credits,release_dates`)
    setMovie(resp.data);
    
   
  
  }
 

  useEffect(()=>{
    getMovieData(movieId);
  },[movieId]);

  function showDirector(){
   let director =  movie?.credits.crew.find(
      (crew)=>crew.known_for_department.toLowerCase()==="directing"
    );
   
    return director?.name;
  }

  function findAgeRating(){
    let search = movie?.release_dates.results.find(
      (obj)=>obj.iso_3166_1 ==="US"
    );

    let rating = search?.release_dates.find(
      obj=>obj.certification!==""
    )
    
    return rating?.certification;
  }

  function showWriter(){
    let writer =  movie?.credits.crew.find(
      (crew)=>crew.known_for_department.toLowerCase()==="writing"
    );
   
    return writer?.name;  
  }

  async function showActors(){
    let actors  = movie?.credits.cast.slice(0,3);
    
    
    return actors
   
  }

  showActors();
  return(
    <>
    <div className="single-card">
      <h1>MORE INFO</h1>
      <h2>{movie?.title}</h2>
      <div className="first-info">
        <p>{movie?.release_date}</p>
        <p>{findAgeRating()}</p>
        <p>{movie?.runtime}</p>
      </div>
      <div className="credits">
        <h3>Director</h3>
        <p>{showDirector()}</p>
        <h3>Staring</h3>
       <div className="actors">{showActors()[0]}</div>
        <h3>Writer</h3>
        <p>{showWriter()}</p>
      </div>
      
      
      
    </div>
    </>
  )

}
export default SinglePage