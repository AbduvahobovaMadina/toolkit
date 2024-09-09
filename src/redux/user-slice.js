import { createSlice } from "@reduxjs/toolkit";
import { saveStorage, getStorage } from "../helpers";

export const user = createSlice({
    name:"user",
    initialState: {
        value: JSON.parse(localStorage.getItem("user")) || []
    },
    reducers: {
        addToUsers(state, action){
            state.value = [...state.value, action.payload]
            localStorage.setItem("user", JSON.stringify(state.value))
        },
        removeFromUsers(state, action){
            state.value = state.value.filter(user=> user.id !== action.payload.id)
            localStorage.setItem("user", JSON.stringify(state.value))
        }
    }
})

export const { addToUsers,removeFromUsers} = user.actions
export default user.reducer