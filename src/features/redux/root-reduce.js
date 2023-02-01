import { combineReducers } from "redux";
import favouritesReducer from '../favouritesSlice';
import movieSearchSlice from '../movieSearchSlice';

const rootReduce = combineReducers({ favouritesReducer, movieSearchSlice });

export default rootReduce;