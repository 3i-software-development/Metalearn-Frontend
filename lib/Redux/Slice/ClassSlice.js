import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    products: []
}
const ClassSlice = createSlice({
    name: "class",
    initialState,
    reducers: {
        classFilter(state, action) {
            console.log("check aciton",action)
            state.products.unshift(action.payload)
        },
    },
})

export const {classFilter} = ClassSlice.actions
export default ClassSlice.reducer