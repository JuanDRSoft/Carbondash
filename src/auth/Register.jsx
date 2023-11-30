import React, { useState } from "react";
import Logo from "/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ApiKey,
  baseUrl,
  industries,
  locations,
  periods,
  profiles,
} from "../utils/Data";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState(null);
  const [employees, setEmployees] = useState(0);
  const [location, setLocation] = useState(null);
  const [profile, setProfile] = useState(null);
  const [period, setPeriod] = useState(null);

  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${ApiKey}`,
    };

    const token = uuidv4();

    const body = { fields: { name, email, password, token } };
    const bodyCustomers = {
      fields: {
        "Company name": company,
        "Contact name": name,
        Email: email,
        Website: website,
        Industry: industry,
        "No. of employees": Number(employees),
        "No. of locations": location,
        "Company profile": profile,
        "What time period would you like to calculate emissions for?": period,
      },
    };

    try {
      const data = await axios.post(
        `${baseUrl}/appZtT2Tb57qF6PrF/Users`,
        body,
        { headers }
      );

      const dataCustomers = await axios.post(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Customers`,
        bodyCustomers,
        { headers }
      );

      setAuth(body.fields);
      localStorage.setItem("Token", token);
      toast.success("Profile Created Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="p-10 shadow-2xl border rounded-lg md:w-[500px] w-[80%] relative">
        <h1 className="absolute md:-right-[70%] md:bottom-[40%] md:rotate-90 md:flex hidden text-9xl font-bold text-gray-100">
          REGISTER
        </h1>

        <h1 className="absolute -top-20 text-7xl font-bold text-gray-100 md:hidden left-0 w-full text-center">
          REGISTER
        </h1>

        <div className="flex justify-center mt-5">
          <Link to="/">
            <img src={Logo} className="w-[250px]" />
          </Link>
        </div>

        <h3 className="mt-10 text-center font-semibold">Create Your Account</h3>

        <form className="mt-10 px-10" onSubmit={handleSubmit}>
          {!show ? (
            <>
              <label className="font-semibold text-lg">Company Name</label>
              <input
                className="border-b w-full border-black outline-none p-1 mb-10"
                placeholder="company"
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />

              <label className="font-semibold text-lg">Your Name</label>
              <input
                className="border-b w-full border-black outline-none p-1 mb-10"
                placeholder="full name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

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

              <input
                className="mt-14 p-2 bg-[#2dbf1d] cursor-pointer hover:bg-green-700 font-bold 
                     w-full rounded-xl text-white shadow-lg shadow-[#2dbf1d25]"
                value="NEXT"
                type="submit"
                onClick={() => setShow(true)}
              />
            </>
          ) : (
            <>
              <label className="font-semibold text-lg">Website</label>
              <input
                className="border-b w-full border-black outline-none p-1 mb-10"
                placeholder="website"
                type="text"
                required
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />

              <div className="flex gap-4">
                <div className="w-full">
                  <label className="font-semibold text-lg">Industry</label>
                  <select
                    className="border-b w-full border-black outline-none p-1 mb-10"
                    required
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  >
                    <option></option>
                    {industries.map((e) => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                <div className="w-full">
                  <label className="font-semibold text-lg">
                    No. of employees
                  </label>
                  <input
                    className="border-b w-full border-black outline-none p-1 mb-10"
                    placeholder="company"
                    type="number"
                    required
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <label className="font-semibold text-lg">
                    Company profile
                  </label>
                  <select
                    className="border-b w-full border-black outline-none p-1 mb-10"
                    required
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                  >
                    <option></option>
                    {profiles.map((e) => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                </div>

                <div className="w-full">
                  <label className="font-semibold text-lg">
                    No. of locations
                  </label>
                  <select
                    className="border-b w-full border-black outline-none p-1 mb-10"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option></option>
                    {locations.map((e) => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="font-semibold text-lg">
                What time period would you like to calculate emissions for?
              </label>
              <select
                className="border-b w-full border-black outline-none p-1 mb-10"
                required
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option></option>
                {periods.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>

              <input
                className="p-2 bg-[#2dbf1d] cursor-pointer hover:bg-green-700 font-bold 
                     w-full rounded-xl text-white shadow-lg shadow-[#2dbf1d25]"
                value="CREATE"
                type="submit"
              />
            </>
          )}
        </form>

        <p className="mt-16 text-center">
          Do you have an account?{" "}
          <Link to="/login" className="font-semibold text-[#2dbf1d]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
