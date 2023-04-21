import { infoUser } from '@/lib/Midleware/RTKQuery'
import LoginReducer from '@/lib/Redux/Slice/LoginSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [infoUser.reducerPath]: infoUser.reducer,
    login: LoginReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(infoUser.middleware),
})
setupListeners(store.dispatch)