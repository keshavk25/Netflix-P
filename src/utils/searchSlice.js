import { createSlice } from "@reduxjs/toolkit";

const searchSLice  = createSlice({
    name: "Search",
    initialState: {
        showSearch:false,
        searchMovieResult:"",
    },
    reducers:{
        toggleSearch: (state)=>{
            state.showSearch= !state.showSearch;
        },
        addSearchMovieResult:(state,action)=>{
            state.searchMovieResult=action.payload
        }
    }
})

export const {toggleSearch,addSearchMovieResult} = searchSLice.actions;
export default searchSLice.reducer;