import MovieCard from "../components/MovieCards";
import { useEffect,useState } from 'react';
import { apiKey } from '../Globals/globalVariables';
import axios from 'axios';
import { useSelector } from "react-redux";
import isFavourite from "../utilities/isFavourite";

function PageLanding(){
  const favourites = useSelector((state)=>state.favourites.items);

  const [movieData, setMovieData] = useState();
  const [dropDownDisplay, setDropDown] = useState();

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

  function handleDropDown (event){
    console.log(event);
    setDropDown(event.target.value);
    getMovieData(event.target.value);
  }
  


  return(
    <>
    <div className="drop-down-position">
     <nav className="drop-down">
        <select onChange={handleDropDown} value={dropDownDisplay} name="drop-down">          
          <option value="popular">Popular</option>
          <option value="now_playing">Now Playing</option>
          <option value="top_rated">Top Rated</option>
        </select> 
      {/* <input type="text"  name="search"></input> */}
      </nav>
      </div>
      
      
      <div className="movie-grid-container">
      {movieData?.map((movie)=>{
        return(
          <MovieCard 
          key = {movie.id}
          moviePoster = {movie.poster_path}
          title = {movie.title}
          releaseDate = {movie.release_date}

          isFavourite = {isFavourite(favourites,null,movie.id)}
          />
        );
      })}
      <MovieCard />
      </div>
    </>
  )
}

export default PageLanding;