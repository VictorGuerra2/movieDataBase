import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  searchResults: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    updateSearchResult: (state, action) => {
      state.searchResults = action.payload
    },
  }
});

export const { updateSearchValue, updateSearchResult } = searchSlice.actions
export const searchSelector = (state) => state.search
export default searchSlice.reducer


