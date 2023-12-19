import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptState: false,
    },
    reducers: {
        addGptButtonValue: (state) => {
            state.gptState = !state.gptState;
        }
    }
});

export const { addGptButtonValue } = gptSlice.actions;
export default gptSlice.reducer;