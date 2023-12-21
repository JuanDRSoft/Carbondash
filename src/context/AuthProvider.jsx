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
    name: "",
    1: "",
    1.1: 0,
    1.2: 0,
    1.3: 0,
    1.4: 0,

    2: "",
    2.1: 0,
    2.2: 0,
    2.3: 0,
    2.4: 0,
    2.5: 0,

    3: "",
    3.1: 0,
    3.2: 0,
    3.3: 0,
    3.4: 0,
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

      try {
        const { data } = await axios.get(
          `${baseUrl}/appZtT2Tb57qF6PrF/Users`,
          config
        );

        if (data.records.length > 0) {
          const newData = data.records.find((e) => e.fields.token == token);
          if (newData) {
            setAuth(newData.fields);
          }
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

  const saveScope1 = async () => {
    if (!auth.token) {
      toast.error("Register or log in to submit a response");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ApiKey}`,
      },
    };

    const bodyData = {
      fields: {
        "Customer Name": scope1.name,
        "1. Did your company own or maintain long-term leases on vehicles?":
          scope1[1],
        "1.1 How many litres of gasoline / unleaded petrol did you use in your vehicles?":
          scope1["1.1"],
        "1.2 How much did your company spend on gasoline / unleaded petrol fuel for your vehicles?":
          scope1["1.2"],
        "1.3 How many litres of diesel did you use in your vehicles?":
          scope1["1.3"],
        "1.4 How much did your company spend on diesel for your vehicles?":
          scope1["1.4"],
        "2. MACHINERY Did your company own or maintain long-term leases on machinery or generators?":
          scope1[2],
        "2.1 How many litres of gasoline / unleaded petrol did you use in your machinery?":
          scope1["2.1"],
        "2.2 How much did your company spend on gasoline / unleaded petrol fuel for your machinery?":
          scope1["2.2"],
        "2.3 How many litres of diesel did you use in your machinery?":
          scope1["2.3"],
        "2.4 How much did your company spend on diesel for your machinery?":
          scope1["2.4"],
        "2.5 Approximately how much kerosene did you use in your generators?":
          scope1["2.5"],
        "3. Do you have commercial air conditioning or refrigerators in your place of business that required servicing?":
          scope1[3],
        "3.1 How many air conditioning units do you have?": scope1["3.1"],
        "3.2 How many refrigeration units do you have?": scope1["3.2"],
        "3.3 How many times were the air conditioners serviced during the time period?":
          scope1["3.3"],
        "3.4 How many times were your refrigerators serviced during the time period?":
          scope1["3.4"],
      },
    };

    try {
      const data = await axios.post(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Customer%20Answers`,
        bodyData,
        config
      );

      toast.success("Scope 1 Saved Successfully");
    } catch (error) {
      console.log(error);
    }
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
        saveScope1,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };

export default AuthContext;
