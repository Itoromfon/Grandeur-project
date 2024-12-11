import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0, // Default index
    isHovered: false,
}

const activeIndexSlice = createSlice({
    name: 'activeIndex',
    initialState,
    reducers: {
        setActiveIndex: (state, action) => {
            state.value = action.payload;
        },
        setIsHovered: (state, action) => {
            state.isHovered = action.payload;
        }
    },
});

export const { setActiveIndex, setIsHovered } = activeIndexSlice.actions;
export default activeIndexSlice.reducer