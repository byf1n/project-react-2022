import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {services} from "../../services/services";

const initialState = {
    genres: [],
    chosenGenre: null
}

const getAllGenres = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await services.getAllGenres();
            // return {genres:data};
            return data.genres
        } catch (e) {
            return rejectWithValue(e.response.value)
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,

    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
});

const {reducer:genreReducer} = genreSlice;

const genreActions = {
    getAllGenres
}

export {
    genreActions, genreReducer
}