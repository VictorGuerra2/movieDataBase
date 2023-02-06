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
    
    return (rating?.certification) ? rating?.certification : "Unrated";
  }

  function showWriter(){
    let writer =  movie?.credits.crew.find(
      (crew)=>(crew.job.toLowerCase()==="screenplay" || crew.job.toLowerCase()==='writer')
    );
   
    return writer?.name;  
  }

  async function showActors(){
    let actors  = movie?.credits.cast.slice(0,3);
    
    
    return actors
   
  }

  function findTrailer(){
    let trailer = movie?.videos.results.find(
      (vid) => vid.name.toLowerCase() === "official trailer"
    );

    if(!trailer){
      trailer = movie?.videos.results.find(
        (vid) => vid.type.toLowerCase() === "trailer"
      );
    }
    
    return (trailer?.key) ? <YouTube containerClassName = {"youtube-container"}   
    opts={{width:"100%", height:"100%" }}  videoId = {trailer?.key}/>: <p>No Trailer</p>;
  }

  showActors();
  return(
    <>
    <h1 className="more-info-heading">MORE INFO</h1>
    <div className="single-card">
    <div className="tablet-card">
    <section className="single-poster">
        <img className="display-mobile" src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`} alt="" />
        <img className="display-tablet" src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt="" />
        <img className="display-desktop" src={`https://image.tmdb.org/t/p/w400/${movie?.poster_path}`} alt="" />
      </section>
      <section className="info">
        
        <h2>{movie?.title}</h2>
        <div className="first-info">
          <p>{movie?.release_date}</p>
          <p>{findAgeRating()}</p>
          <p>{movie?.runtime}</p>
        </div>
        <div className="overview">
          <p>{movie?.overview}</p>
        </div>
        <div className="credits">
          <h3>Director</h3>
          <p>{showDirector()}</p>
          <h3>Staring</h3>
        <div className="actors">{showActors()[0]}</div>
          <h3>Writer</h3>
          <p>{showWriter()}</p>
        </div>
        <p>{movie?.vote_average}/10</p>
      </section>
     
      </div>
      <div className="trailer">
        {findTrailer()}
      </div>
    </div>
    </>
  )

}
export default SinglePage