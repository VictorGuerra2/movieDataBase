import { configureStore } from '@reduxjs/toolkit';
import dropDownReducer from '../features/dropDownSlice';


export const store = configureStore({
  reducer: {
    dropDown:dropDownReducer
  }
});