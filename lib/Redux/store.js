import { infoUser } from "@/lib/Midleware/AuthQuery";
import LoginReducer from "@/lib/Redux/Slice/LoginSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { examQuery } from "../Midleware/ExamQuery";
import { fileCwQuery } from "../Midleware/FileCwQuery";
import { lmsClassQuery } from "../Midleware/LmsClassQuery";
import { cmsClassQuery } from "../Midleware/CmsClassQuery";
import { quizQuery } from "../Midleware/QuizQuery";
import { scheduleQuery } from "../Midleware/ScheduleQuery";
import { subjectQuery } from "../Midleware/SubjectQuery";
import { practiveQuery } from "../Midleware/PractiveQuery";
import { lectureQuery } from "../Midleware/LectureQuery";
import { chartQuery } from "../Midleware/ChartQuery";
import { courseQuery } from "../Midleware/CourseQuery";
import { userQuery } from "../Midleware/UserQuery";
import { newQuery } from "../Midleware/NewQuery"
import { blogQuery } from "../Midleware/BlogQuery"
import courseDocumentReducer from './Slice/CourseDocument'
import classReducer from './Slice/ClassSlice'
import courseReducer from './Slice/CourseSlice'

export const store = configureStore({
  reducer: {
    [examQuery.reducerPath]: examQuery.reducer,
    [subjectQuery.reducerPath]: subjectQuery.reducer,
    [quizQuery.reducerPath]: quizQuery.reducer,
    [infoUser.reducerPath]: infoUser.reducer,
    [quizQuery.reducerPath]: quizQuery.reducer,

    [scheduleQuery.reducerPath]: scheduleQuery.reducer,
    [lmsClassQuery.reducerPath]: lmsClassQuery.reducer,
    [fileCwQuery.reducerPath]: fileCwQuery.reducer,

    [scheduleQuery.reducerPath]: scheduleQuery.reducer,
    [lmsClassQuery.reducerPath]: lmsClassQuery.reducer,
    [cmsClassQuery.reducerPath]: cmsClassQuery.reducer,
    [practiveQuery.reducerPath]: practiveQuery.reducer,

    [lectureQuery.reducerPath]: lectureQuery.reducer,
    [chartQuery.reducerPath]: chartQuery.reducer,

    [courseQuery.reducerPath]: courseQuery.reducer,
    [userQuery.reducerPath]: userQuery.reducer,
    [newQuery.reducerPath]: newQuery.reducer,
    [blogQuery.reducerPath]: blogQuery.reducer,

    login: LoginReducer,
    courseDocument : courseDocumentReducer,
    class : classReducer,
    course : courseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      examQuery.middleware,
      infoUser.middleware,
      subjectQuery.middleware,
      quizQuery.middleware,
      scheduleQuery.middleware,
      lmsClassQuery.middleware,
      cmsClassQuery.middleware,

      fileCwQuery.middleware,
      practiveQuery.middleware,
      lectureQuery.middleware,
      chartQuery.middleware,
      courseQuery.middleware,

      userQuery.middleware,
      newQuery.middleware,
      blogQuery.middleware,
    ]),
});
setupListeners(store.dispatch);
