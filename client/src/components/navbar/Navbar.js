import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slice/signin/SignInReducer";
import { toast } from "react-toastify";

const Navbar = ({ auth }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    toast.success("Logout Successfully")
    localStorage.clear();
    dispatch(logout());
  };
  return (
    <div className="bg-[red] text-white h-[4rem]">
      <div className="flex items-center justify-between sm:px-10 px-5 w-full h-full">
        <div className="sm:text-3xl text-xl">PDF-Desiger</div>
        <ul className="flex sm:gap-3 sm:font-bold text-sm gap-2">
          {auth ? (
            <>
              <Link to="/home">
                <li className=" cursor-pointer">Home</li>
              </Link>
              <Link to="/create-pdf">
                <li>Create PDF</li>
              </Link>
              <Link to="/instruction">Instruction</Link>
              <li className="cursor-pointer" onClick={handleLogout}>
                Logout
              </li>
            </>
          ) : (
            <>
              <Link to="/">
                <li className=" cursor-pointer">Login</li>
              </Link>
              <Link to="/signup">
                <li className=" cursor-pointer">Register</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
