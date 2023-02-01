import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emply: '',
}

export const pageMovieSlice = createSlice({
  name: 'pageSubmit',
  initialState,
  reducers: {
    pageMovieSubmit: (state, action) => {
      state.movies = [...state.movies, { ...action.payload, emply: "god" }]
    }
  }
});

export const { pageMovieSubmit } = pageMovieSlice.actions

export default pageMovieSlice.reducer;