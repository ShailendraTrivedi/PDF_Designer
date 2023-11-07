import axios from "axios";
import { signInSuc } from "../signin/SignInReducer";
import { signUpErr, signUpReq, signUpSuc } from "./SignUpReducer";
import { REACT_APP_LOCAL_STORAGE } from "../../../constant";
import { toast } from "react-toastify";

const SignUpAction = (values) => {
  return async (dispatch) => {
    dispatch(signUpReq());
    try {
      const response = await axios.post(
        `${REACT_APP_LOCAL_STORAGE}/user/signup`,
        values
      );
      console.log(response);
      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data.result));
        dispatch(signUpSuc(response.data.result));
        dispatch(signInSuc(response.data.result));
        toast.success(response.data.message);
      }
    } catch (error) {
      dispatch(signUpErr());
      toast.error(error.response.data.error);
    }
  };
};

export default SignUpAction;
