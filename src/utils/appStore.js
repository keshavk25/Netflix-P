import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptSearch from "./gptSlice";
import language from "./configLangSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptSearch,
        configLang:language,        
    }
})

export default appStore;