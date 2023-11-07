import React from "react";

// import dependencies
import { Route, Routes } from "react-router-dom";

// pages
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import CreateApp from "../pages/create-app/CreateApp";
import Home from "../pages/home/Home";
import Instruction from "../pages/instruction/Instruction";
import OutletRouter from "./OutletRouter";

const PageRouting = ({auth}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<OutletRouter auth={auth}/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/create-pdf" element={<CreateApp />} />
          <Route path="/Instruction" element={<Instruction />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PageRouting;
