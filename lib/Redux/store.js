import { infoUser } from '@/lib/Midleware/AuthQuery'
import LoginReducer from '@/lib/Redux/Slice/LoginSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { examQuery } from '../Midleware/ExamQuery'
import { fileCwQuery } from '../Midleware/FileCwQuery'
import { lmsClassQuery } from '../Midleware/LmsClassQuery'
import { quizQuery } from '../Midleware/QuizQuery'
import { scheduleQuery } from '../Midleware/ScheduleQuery'

export const store = configureStore({
  reducer: {
    [examQuery.reducerPath]: examQuery.reducer,

    [infoUser.reducerPath]: infoUser.reducer,
    [quizQuery.reducerPath]: quizQuery.reducer,
    [scheduleQuery.reducerPath]:scheduleQuery.reducer,
    [lmsClassQuery.reducerPath]:lmsClassQuery.reducer,
    [fileCwQuery.reducerPath]:fileCwQuery.reducer,
    login: LoginReducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(examQuery.middleware);
  //   getDefaultMiddleware().concat(infoUser.middleware)
  // }
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      examQuery.middleware,
      infoUser.middleware,
      quizQuery.middleware,
      scheduleQuery.middleware,
      lmsClassQuery.middleware,
      fileCwQuery.middleware,
    ]),
})
setupListeners(store.dispatch)