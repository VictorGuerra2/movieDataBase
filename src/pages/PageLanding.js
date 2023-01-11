import React from 'react';
import { useEffect,useState } from 'react';
import { appTitle,apiKey } from '../Globals/globalVariables';
import axios from 'axios';

function PageLanding(){

  const [movieData, setMovieData] = useState();

  async function getMovieData(type){
    try {
      let resp =  await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=en-US&page=1`);
      setMovieData(resp.data.results);
      console.log(resp.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getMovieData('popular');
  },[])
  
  return(
    <>
      <button onClick={()=>{getMovieData("top_rated")}} >Top Rated</button>
      <button onClick={()=>{getMovieData("popular")}} >Popular</button>
      <button onClick={()=>{getMovieData("now_playing")}} >Now Playing</button>
      <div className="grid-container">
        {movieData?.map((movie)=>
          <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="Movie Poster" />
            <div className="movie-name">{movie.title}</div>
            <div className="overview">{movie.overview}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default PageLanding;