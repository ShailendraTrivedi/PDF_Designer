import { signInSuc } from "../signin/SignInReducer";
import { signUpErr, signUpReq, signUpSuc } from "./SignUpReducer";

const SignUpAction = (values) => {
  return async (dispatch) => {
    dispatch(signUpReq());
    try {
      dispatch(signUpSuc(values));
      dispatch(signInSuc(values));
    } catch (error) {
      dispatch(signUpErr());
    }
  };
};

export default SignUpAction;
