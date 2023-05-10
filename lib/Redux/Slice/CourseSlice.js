import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
    name: "courses",
    initialState: 0,
    reducers: {
        crouseAdded(state, action) {
            state.push(action.payload)
        },
        crouseUpdated(state, action) {
            const courseId = action.payload
            const existingCourse = state.postList.find((post) => post.id === courseId) || null
            state.editingPost = existingCourse
        }
    },
})

export const { crouseAdded, crouseUpdated } = CourseSlice.actions
export default CourseSlice.reducer