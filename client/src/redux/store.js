import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "./slice/signin/SignInReducer";
import SignUpReducer from "./slice/signup/SignUpReducer";
import CreateAppReducer from "./slice/create-app.js/CreateAppReducer";

const store = configureStore({
  reducer: {
    signInStore: SignInReducer,
    signUpStore: SignUpReducer,
    createAppStore: CreateAppReducer,
  },
});

export default store;
