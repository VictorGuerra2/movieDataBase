import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCards";
  

function PageFavourites() {

  const favourites = useSelector((state) => state.rootReduce.favouritesReducer.items);

  return (
    <main>
      <section>
        {/* Home icon */}
      <Link className="home-icon-src-top" to="/">
          <img className="home-icon-top" src={require('../images/icon.png')} alt="logo" />  
      </Link>
      {/* Home icon end */}
        <h2>Favourite movies</h2>
        {favourites.length < 1 ? (
          <p>No favourites in your collection. Return to the <Link to="/">home</Link> page
          to add some favourite characters.</p>
        ):(
          <div className="favourite-movie-grid">
            {favourites.map((movieObj, i) => {
              return (
                <MovieCard
                  key={i}
                  movieObject={movieObj}
                  isFavourite={true}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
  )
}

export default PageFavourites