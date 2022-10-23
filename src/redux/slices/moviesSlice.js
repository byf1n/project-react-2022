import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {services} from "../../services/services";
import {useSelector} from "react-redux";


const initialState = {
    searchMovies: [],
    movies: [],
    id: 1

}

const getAllMoviesBySearch = createAsyncThunk(
    'moviesSlice/getMoviesBySearch',
    async ({value}, {rejectWithValue}) => {
        try {
            const {data} = await services.getMovieBySearch(value);
            return data.results;
        } catch (e){
            return rejectWithValue(e.response.value)
        }
    }
);

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAll',
    async ({id},{rejectWithValue}) => {
        try {
            const {data} = await services.getMovieById(id);
            return data.results;
        } catch (e){
            return rejectWithValue(e.response.value)
        }
    }
);
const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{
        changeId:(state, action) => {
            state.id = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(getAllMoviesBySearch.fulfilled, (state, action) => {
                state.searchMovies = action.payload
            })
});

const {reducer:movieReducer,actions:{changeId}} = moviesSlice;

const moviesActions = {
    getAllMovies,changeId,getAllMoviesBySearch
}

export {
    moviesActions, movieReducer
}