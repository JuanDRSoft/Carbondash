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
    <AuthContext.Provider value={{ auth, setAuth, cargando, cerrarSesionAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };

export default AuthContext;
