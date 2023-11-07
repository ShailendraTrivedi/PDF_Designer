import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
  name: "signin",
  initialState: {
    loading: false,
    user: "",
  },
  reducers: {
    signInReq: (state) => {
      state.loading = true;
    },
    signInSuc: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    signInErr: (state) => {
      state.loading = false;
    },
    logout: (state) => {
      state.user = "";
    },
  },
});

export const { signInReq, signInSuc, signInErr, logout } = SignInSlice.actions;
const SignInReducer = SignInSlice.reducer;
export default SignInReducer;
