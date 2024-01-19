import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    keyword: '',
    timeStart: '',
    timeEnd: '',
}

const CourseDocument = createSlice({
    name: "courseDocument",
    initialState,
    reducers: {
        setCourseDocument(state, action) {
            state.keyword = action.payload.keyword, 
            state.timeStart = action.payload.timeStart, 
            state.timeEnd = action.payload.timeEnd 
        }
    },
})

export const { setCourseDocument } = CourseDocument.actions
export default CourseDocument.reducer