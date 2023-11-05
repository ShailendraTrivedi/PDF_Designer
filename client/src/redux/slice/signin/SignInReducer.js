import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
  name: "signin",
  initialState: {
    loading: false,
    user: "shailendratrivedi004@gmail.com",
  },
  reducers: {
    signInReq: (state) => {
      state.loading = true;
    },
    signInSuc: (state, action) => {
      state.loading = false;
      state.user = action.payload.userEmail;
    },
    signInErr: (state) => {
      state.loading = false;
    },
  },
});

export const { signInReq, signInSuc, signInErr } = SignInSlice.actions;
const SignInReducer = SignInSlice.reducer;
export default SignInReducer;
