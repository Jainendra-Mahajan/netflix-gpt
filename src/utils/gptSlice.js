import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptState: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        addGptButtonValue: (state) => {
            state.gptState = !state.gptState;
        },

        addSearchMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { addGptButtonValue, addSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;