import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {services} from "../../services/services";
import {useSelector} from "react-redux";


const initialState = {
    movies: [],
    id: 1,

}



const getAllMovies = createAsyncThunk(
    'moviesSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await services.getMovieById(initialState.id);
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
});

const {reducer:movieReducer,actions:{changeId}} = moviesSlice;

const moviesActions = {
    getAllMovies,changeId
}

export {
    moviesActions, movieReducer
}