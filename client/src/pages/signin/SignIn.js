import React from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Input from "../../components/input/Input";
import SignInAction from "../../redux/slice/signin/SignInAction";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signinStore = useSelector((state) => state.signInStore.loading);

  const validationSchema = Yup.object().shape({
    userEmail: Yup.string().required("Email is required"),
    userPassword: Yup.string().required("Password is required"),
  });

  return (
    <>
      {signinStore.loading ? (
        <div className="text-3xl">Loading....</div>
      ) : (
        <div className="flex justify-center  pt-[5rem]">
          <div className="w-[30rem] space-y-10 border-2 border-black p-5 rounded-xl shadow-xl">
            <div className="text-4xl text-center">Welcome Back !</div>
            <div className="space-y-4">
              {/* <Input /> */}
              <Formik
                initialValues={{
                  userEmail: "",
                  userPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  dispatch(SignInAction(values, navigate));
                }}
              >
                {() => (
                  <Form className="flex flex-col gap-5">
                    <div className="">
                      <Input
                        type="text"
                        name="userEmail"
                        label="User Email"
                        placeholder="Enter The Email Address"
                      />
                    </div>
                    <div className="">
                      <Input
                        label="User Password"
                        type="text"
                        name="userPassword"
                        placeholder="Enter The Password"
                      />
                    </div>
                    <div className="flex justify-end">
                      <div className="text-[#4f4e4e]">Forget Password?</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="bg-[red] text-white text-xl p-2 w-[10rem] rounded-full"
                      >
                        SignIn
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
