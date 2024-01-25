import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    toggelGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) =>{
      const {movieNames,movieResults} = action.payload
        state.movieNames = movieNames;
        state.movieResults = movieResults
    }
  },
});
export const { toggelGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
