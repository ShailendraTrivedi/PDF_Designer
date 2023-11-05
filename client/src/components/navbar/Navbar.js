import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[red] text-white h-[4rem]">
      <div className="flex items-center justify-between px-10 w-full h-full">
        {/* Left Side of Navbar */}
        <div className="text-3xl">PDF-Desiger</div>
        {/* Right Side of Navbar */}
        <ul className="flex gap-3 font-bold">
          <Link to="/">
            <li className=" cursor-pointer">Home</li>
          </Link>
          <Link to="/create-pdf">
            <li>Create PDF</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;