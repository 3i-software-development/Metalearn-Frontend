import { infoUser } from '@/lib/Midleware/LoginQuery'
import LoginReducer from '@/lib/Redux/Slice/LoginSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { examQuery } from '../Midleware/ExamQuery'
import { quizQuery } from '../Midleware/QuizQuery'
import { subjectQuery } from '../Midleware/SubjectQuery'

export const store = configureStore({
  reducer: {
    [examQuery.reducerPath]: examQuery.reducer,

    [subjectQuery.reducerPath]: subjectQuery.reducer,

    [quizQuery.reducerPath]: quizQuery.reducer,

    [infoUser.reducerPath]: infoUser.reducer,
    login: LoginReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      examQuery.middleware,
      infoUser.middleware,
      subjectQuery.middleware,
      quizQuery.middleware
    ]),
})
setupListeners(store.dispatch)