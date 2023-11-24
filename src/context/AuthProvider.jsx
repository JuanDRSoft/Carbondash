import axios from "axios";
import React from "react";
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiKey, baseUrl } from "../utils/Data";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  const [scope1, setScope1] = useState({
    1: "",
    "1a": 0,
    "1b": 0,
    2: "",
    "2a": 0,
    "2b": 0,
    3: "",
    "3a": 0,
    4: 0,
    "4a": 0,
  });

  const [scope2, setScope2] = useState({
    1: "",
    "1a": 0,
    "1b": 0,
    2: "",
    "2a": 0,
    "2b": 0,
    3: "",
    "3a": 0,
    4: 0,
    "4a": 0,
    "4b": 0,
    "4c": 0,
  });

  const [scope3, setScope3] = useState({
    "Business Travel": 0,
    "Transport / freight": 0,
    "Materials & inventory": 0,
    "Capital goods": 0,
    Services: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const autenticarAdmin = async () => {
      const token = localStorage.getItem("Token");

      if (!token) {
        setCargando(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ApiKey}`,
        },
      };

      const query = {
        params: {
          filterByFormula: `token = ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          `${baseUrl}/appZtT2Tb57qF6PrF/Users`,
          config,
          query
        );

        if (data.records.length > 0) {
          setAuth(data.records[0].fields);
        }
      } catch (error) {
        console.log(error);
        setAuth({});
      } finally {
        setCargando(false);
      }
    };
    autenticarAdmin();
  }, []);

  const cerrarSesionAuth = () => {
    localStorage.removeItem("Token");
    setAuth({});
    toast.success("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesionAuth,
        setScope1,
        scope1,
        scope2,
        setScope2,
        scope3,
        setScope3,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };

export default AuthContext;
