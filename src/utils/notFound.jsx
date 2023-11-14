import React from "react";
import Gif from "/notFound.gif";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#90C060]">
      <div>
        <h1 className="text-center font-bold text-white text-6xl">
          Page Not Found
        </h1>
        <div className="flex justify-center relative">
          <img src={Gif} className="md:w-[30%]  w-[50%]" />
          <Link
            to="/"
            className="text-center absolute bg-white p-2 bottom-6 w-[30%] rounded-xl font-bold text-[#90C060]"
          >
            IR AL INICIO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
