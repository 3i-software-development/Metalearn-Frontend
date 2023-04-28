import { infoUser } from "@/lib/Midleware/AuthQuery";
import { createSlice } from "@reduxjs/toolkit"

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: {},
  },
  extraReducers: (builder) => {
    builder.addMatcher(infoUser.endpoints.login.matchFulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
})

export default LoginSlice.reducer