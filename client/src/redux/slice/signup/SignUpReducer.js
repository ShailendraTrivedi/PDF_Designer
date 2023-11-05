import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    loading: false,
  },
  reducers: {
    signUpReq: (state) => {
      state.loading = true;
    },
    signUpSuc: (state) => {
      state.loading = false;
    },
    signUpErr: (state) => {
      state.loading = false;
    },
  },
});

export const { signUpReq, signUpSuc, signUpErr } = signUpSlice.actions;
const SignUpReducer = signUpSlice.reducer;
export default SignUpReducer;
