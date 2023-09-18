import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    clearGptMovieResult: null,
    clearGptMovieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptMovieResult: (state) => {
      state.movieResults = {};
    },
    clearGptMovieName: (state) => {
      state.movieNames = null;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResult,
  clearGptMovieResult,
  clearGptMovieName,
} = gptSlice.actions;

export default gptSlice.reducer;
