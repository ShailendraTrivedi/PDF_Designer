import { signInErr, signInReq, signInSuc } from "./SignInReducer";

const SignInAction = (values) => {
  return async (dispatch) => {
    dispatch(signInReq());
    try {
      dispatch(signInSuc(values));
    } catch (error) {
      dispatch(signInErr());
    }
  };
};

export default SignInAction;
