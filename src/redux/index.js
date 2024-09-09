import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import user from "./user-slice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user
    }
})
