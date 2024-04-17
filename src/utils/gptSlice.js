import { createSlice } from "@reduxjs/toolkit";

const gptSLice  = createSlice({
    name: "gptSearch",
    initialState: {
        showGptSearch:false,
    },
    reducers:{
        toggleGptSearch: (state)=>{
            state.showGptSearch= !state.showGptSearch;
        }
    }
})

export const {toggleGptSearch} = gptSLice.actions;
export default gptSLice.reducer;