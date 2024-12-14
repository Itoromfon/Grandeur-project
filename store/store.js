import { configureStore } from "@reduxjs/toolkit";
import activeIndexReducer from './activeIndexSlice';

const store = configureStore({
    reducer: {
        activeIndex: activeIndexReducer,
    },
});

export default store;