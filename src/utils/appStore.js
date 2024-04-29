import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import search from "./searchSlice";
import language from "./configLangSlice"


const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        search: search,
        configLang:language,  
    }
})

export default appStore;