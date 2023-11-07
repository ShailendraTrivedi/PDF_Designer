import axios from "axios";
import { toast } from "react-toastify";
import { REACT_APP_LOCAL_STORAGE } from "../../../constant";
import { signInErr, signInReq, signInSuc } from "./SignInReducer";

const SignInAction = (values , navigate) => {
  return async (dispatch) => {
    dispatch(signInReq());
    try {
      const response = await axios.post(
        `${REACT_APP_LOCAL_STORAGE}/user/signIn`,
        values
      );
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.result));
        dispatch(signInSuc(response.data.result));
        toast.success("Login Successfully");
      }
    } catch (error) {
      dispatch(signInErr());
      toast.error(error.response.data.error);
    }
  };
};

export default SignInAction;
