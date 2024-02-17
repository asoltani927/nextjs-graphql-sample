import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFilm: []
}

const moviesSlide = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
      update: (state, action) => {
        state.allFilm = action.payload
      },
    },
  });
  export const { update } = moviesSlide.actions;
  
  export default moviesSlide.reducer;