import React from "react";

// import dependencies
import { Route, Routes } from "react-router-dom";

// pages
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import CreateApp from "../pages/create-app/CreateApp";

const PageRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div className="text-9xl">Home</div>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/create-pdf" element={<CreateApp />} />
      </Routes>
    </div>
  );
};

export default PageRouting;
