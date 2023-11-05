import React from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../components/input/Input";
import SignInAction from "../../redux/slice/signin/SignInAction";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const signinStore = useSelector((state) => state.signInStore);
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
                onSubmit={(values) => {
                  dispatch(SignInAction(values));
                }}
              >
                {() => (
                  <Form className="flex flex-col gap-5">
                    <div className="">
                      <Input
                        type="text"
                        name="userEmail"
                        label="User Email"
                      />
                    </div>
                    <div className="">
                      <Input
                        label="User Password"
                        type="text"
                        name="userPassword"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button className="text-[#4f4e4e]">
                        Forget Password?
                      </button>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="bg-[red] text-white text-xl p-2 w-[10rem] rounded-full"
                      >
                        SignIn
                      </button>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      Don't have an account yet?
                      <Link to="/signUp">
                        <span className="text-[r ed]">ClickHere !</span>
                      </Link>
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
