import React, { useEffect } from "react";

// Page Routing
import PageRouting from "./routers/PageRouting";

// Import components here
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

// Import pages here

const App = () => {
  console.log(process.env.REACT_APP_LOCAL_STORAGE);
  const navigate = useNavigate();
  const auth =
    useSelector((state) => state.signInStore.user) ||
    JSON.parse(localStorage.getItem("user"));
  console.log(auth);

  useEffect(() => {
    if (auth) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [auth]);

  return (
    <div className="relative min-h-screen">
      <Navbar auth={auth} />
      <PageRouting auth={auth} />
    </div>
  );
};

export default App;
