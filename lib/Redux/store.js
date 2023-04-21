import { infoUser } from '@/lib/Midleware/LoginQuery'
import LoginReducer from '@/lib/Redux/Slice/LoginSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { examQuery } from '../Midleware/ExamQuery'

export const store = configureStore({
  reducer: {
    [examQuery.reducerPath]: examQuery.reducer,

    [infoUser.reducerPath]: infoUser.reducer,
    login: LoginReducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(examQuery.middleware);
  //   getDefaultMiddleware().concat(infoUser.middleware)
  // }
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      examQuery.middleware,
      infoUser.middleware
    ]),
})
setupListeners(store.dispatch)