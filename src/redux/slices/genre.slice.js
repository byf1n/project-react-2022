import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";

const initialState = {
    genres: []
}

createAsyncThunk()

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    extraReducers: {

    }
});