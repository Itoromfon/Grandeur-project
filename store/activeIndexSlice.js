import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0, // Default index
}

const activeIndexSlice = createSlice({
    name: 'activeIndex',
    initialState,
    reducers: {
        setActiveIndex: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setActiveIndex } = activeIndexSlice.actions;

export default activeIndexSlice.reducer