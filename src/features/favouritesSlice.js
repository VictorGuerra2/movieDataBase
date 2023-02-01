import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../Globals/globalVariables';

const initialState = {
  items: getFavourites()
}

function getFavourites(){
  let favsFromStorage = localStorage.getItem(appStorageName);
  if(favsFromStorage === null){
      favsFromStorage = [];
  }else{
      favsFromStorage = JSON.parse(favsFromStorage);
  }
  return favsFromStorage;
}

function getIndex(item, arr){
  return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favouritesSlice = createSlice({
  name:"favourites",
  initialState,
  reducers:{
    addFavourite:(state,action) => {
     const newFavourites = [...state.items, action.payload];
     localStorage.setItem(appStorageName, JSON.stringify(newFavourites));
     state.items = newFavourites;
    },
    removeFavourite: (state,action) =>{
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items),1);
      localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    }
  }
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer;