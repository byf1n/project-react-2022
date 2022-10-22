import {combineReducers, configureStore} from "@reduxjs/toolkit";

let roodReducer = combineReducers({

});

let setupStore = configureStore({
    reducer: roodReducer
});

export {setupStore};