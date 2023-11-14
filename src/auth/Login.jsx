import React from "react";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="p-10 shadow-2xl border rounded-lg md:w-[500px] w-[80%] relative">
        <h1 className="absolute md:-right-64 md:bottom-[40%] md:rotate-90 md:flex hidden text-9xl font-bold text-gray-100">
          LOGIN
        </h1>

        <h1 className="absolute -top-32 text-9xl font-bold text-gray-100 md:hidden left-0 w-full text-center">
          LOGIN
        </h1>

        <div className="flex justify-center mt-5">
          <Link to="/">
            <img src={Logo} className="w-[250px]" />
          </Link>
        </div>

        <form className="mt-20 px-10">
          <label className="font-semibold text-lg">Email</label>
          <input
            className="border-b w-full border-black outline-none p-1 mb-10"
            placeholder="correo@correo.com"
            type="email"
            required
          />

          <label className="font-semibold text-lg">Password</label>
          <input
            className="border-b w-full border-black outline-none p-1"
            placeholder="*********"
            type="password"
            required
          />

          <input
            className="mt-14 p-2 bg-[#2dbf1d] cursor-pointer hover:bg-green-700 font-bold 
                       w-full rounded-xl text-white shadow-lg shadow-[#2dbf1d25]"
            value="LOGIN"
            type="submit"
          />
        </form>

        <p className="mt-16 text-center">
          Don´t have an account?{" "}
          <Link to="/register" className="font-semibold text-[#2dbf1d]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
