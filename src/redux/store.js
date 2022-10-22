import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genreReducer} from "./slices/genre.slice";
import {movieReducer} from "./slices/moviesSlice";


let roodReducer = combineReducers({
    genreReducer,
    movieReducer
});

let setupStore = () => configureStore({
    reducer: roodReducer
});

export {setupStore};