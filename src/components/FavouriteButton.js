function FavouriteButton({movieObject, remove,handleFavClick}){
  function handleAddFav() {
    handleFavClick(true, movieObject);
  }

  function handleRemoveFav() {
    handleFavClick(false, movieObject);
  }

  return(
    <>
    {remove === false ? (
      <button onClick={handleAddFav}>Add</button>
    ) : (
      <button onClick={handleRemoveFav}>Remove From Favourites</button>
    )}
  </> 
  )
}

FavouriteButton.defaultProps = {
  remove: false,
};



export default FavouriteButton;