import { configureStore } from '@reduxjs/toolkit';
import rootReduce from "../features/redux/root-reduce";


export const store = configureStore({
  reducer: {
    rootReduce,
  }
});