import { createSlice } from "@reduxjs/toolkit";

const searchSLice  = createSlice({
    name: "Search",
    initialState: {
        showSearch:false,
    },
    reducers:{
        toggleSearch: (state)=>{
            state.showSearch= !state.showSearch;
        }
    }
})

export const {toggleSearch} = searchSLice.actions;
export default searchSLice.reducer;