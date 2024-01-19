import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    products: []
}
const CourseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        crouseAdded(state, action) {
            state.push(action.payload)
        },
        crouseUpdated(state, action) {
            const courseId = action.payload
            const existingCourse = state.postList.find((post) => post.id === courseId) || null
            state.editingPost = existingCourse
        }, 
        crouseFilter(state, action) {
            state.products.unshift(action.payload)
        },
    },
})

export const { crouseAdded, crouseUpdated, crouseFilter } = CourseSlice.actions
export default CourseSlice.reducer