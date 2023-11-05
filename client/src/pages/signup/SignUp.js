import { Form, Formik } from "formik";
import React from "react";
import Input from "../../components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import SignUpAction from "../../redux/slice/signup/SignUpAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const signUpStore = useSelector((state) => state.signUpStore);
  return (
    <>
      {signUpStore.loading ? (
        <div>Loading</div>
      ) : (
        <div className="flex justify-center pt-[5rem]">
          <div className="w-[40rem] space-y-10 border-2 border-black p-5 rounded-xl shadow-xl">
            <div className="text-4xl text-center">
              Create your account to get started.
            </div>
            <Formik
              initialValues={{
                userName: "",
                userEmail: "",
                userPassword: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                dispatch(SignUpAction(values));
              }}
            >
              {() => (
                <Form className="space-y-5">
                  <Input
                    name="userName"
                    label="User Name"
                    type="text"
                    className=""
                    placeholder="Enter The Name..."
                  />
                  <Input
                    name="userEmail"
                    label="User Email"
                    type="text"
                    className=""
                    placeholder="Enter The Email Address..."
                  />
                  <Input
                    name="userPassword"
                    label="User Password"
                    type="password"
                    placeholder="Enter The Password..."
                  />
                  <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-write Password..."
                  />
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
      )}
    </>
  );
};

export default SignUp;
