import React, { useState } from "react";
import Logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ApiKey, baseUrl } from "../utils/Data";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const query = {
      // filterByFormula: `AND(email=${email},password=${password})`,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ApiKey}`,
      },
    };

    try {
      const { data } = await axios.get(
        `${baseUrl}/appZtT2Tb57qF6PrF/Users`,
        config
      );

      if (data.records.length > 0) {
        const newData = data.records.find(
          (e) => e.fields.email == email && e.fields.password == password
        );

        if (
          newData.fields.email == email &&
          newData.fields.password == password
        ) {
          setAuth(newData.fields);
          localStorage.setItem("Token", newData.fields.token);
          setLoading(false);
          toast.success("Hello, Welcome to Carbondash!");
          navigate("/");
        } else {
          toast.error("Password or email do not match");
          setLoading(false);
        }
      } else {
        toast.error("Password or email do not match");
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      toast.error("Password or email do not match");
      console.log(error);
      setLoading(false);
    }
  };

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

        <form className="mt-20 px-10" onSubmit={onLogin}>
          <label className="font-semibold text-lg">Email</label>
          <input
            className="border-b w-full border-black outline-none p-1 mb-10"
            placeholder="correo@correo.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="font-semibold text-lg">Password</label>
          <input
            className="border-b w-full border-black outline-none p-1"
            placeholder="*********"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loading ? (
            <div className="mt-14 text-[#2dbf1d] flex justify-center">
              <i class="fas fa-spinner animate-spin text-5xl"></i>
            </div>
          ) : (
            <input
              className="mt-14 p-2 bg-[#2dbf1d] cursor-pointer hover:bg-green-700 font-bold 
                       w-full rounded-xl text-white shadow-lg shadow-[#2dbf1d25]"
              value="LOGIN"
              type="submit"
            />
          )}
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
