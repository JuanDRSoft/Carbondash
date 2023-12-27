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
  const [EF, setEF] = useState([]);
  const [scope1Report, setScope1Report] = useState({
    vehicles: 0,
    machinery: 0,
    refrigerant: 0,
  });
  const [scope2Report, setScope2Report] = useState({
    kwh: 0,
    "spend on electricity": 0,
  });
  const [scope3Report, setScope3Report] = useState({});

  const [scope1, setScope1] = useState({
    name: "",
    1: "",
    1.1: "",
    1.2: 0,
    1.3: 0,
    1.4: 0,

    2: "",
    2.1: 0,
    2.2: 0,
    2.3: 0,
    2.4: 0,
    2.5: 0,
    2.6: 0,

    3: "",
    3.1: 0,
    3.2: 0,
    3.3: "0",
    3.4: "0",
  });

  const [scope2, setScope2] = useState({
    1: "",
    2: "",
    2.1: "",
    3: 0,
    3.1: 0,
    4: "",
    4.1: 0,
    5: "",
    "5.0": "",
    5.1: "",
    5.2: "",
    5.3: "",
  });

  const [scope3, setScope3] = useState({
    1: 0,
    1.2: 0,
    1.3: 0,
    1.4: 0,
    1.5: 0,

    2.1: 0,
    2.2: 0,
    2.3: 0,
    2.4: 0,
    2.5: 0,

    3.1: 0,
    3.2: 0,
    3.3: 0,
    3.4: 0,

    4.1: 0,
    4.2: 0,
    4.3: 0,
    4.4: 0,
    4.5: 0,
    4.6: 0,
    4.7: 0,
    4.8: 0,
    4.9: 0,

    5.1: 0,
    5.2: 0,
    5.3: 0,
    5.4: 0,

    6.1: 0,
    6.2: 0,
    6.3: 0,
    6.4: 0,
    6.5: 0,

    7.1: 0,
    7.2: 0,
    7.3: "",
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

    const getScope1 = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ApiKey}`,
        },
      };

      try {
        const { data } = await axios.get(
          `${baseUrl}/appJCp1Y4OgnXBC9C/Reports/recoCyA3wFRFWbw8i`,
          config
        );

        setScope1Report(data.fields);
      } catch (error) {
        console.log(error);
      }
    };

    const getScope2 = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ApiKey}`,
        },
      };

      try {
        const { data } = await axios.get(
          `${baseUrl}/appJCp1Y4OgnXBC9C/Reports/rec4JE07Ns1dg80lV`,
          config
        );

        setScope2Report(data.fields);
      } catch (error) {
        console.log(error);
      }
    };

    const getScope3 = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ApiKey}`,
        },
      };

      try {
        const { data } = await axios.get(
          `${baseUrl}/appJCp1Y4OgnXBC9C/Reports/rechRbElJ3m82lawO`,
          config
        );

        setScope3Report(data.fields);
      } catch (error) {
        console.log(error);
      }
    };

    getScope1();
    getScope2();
    getScope3();
    autenticarAdmin();
  }, []);

  const cerrarSesionAuth = () => {
    localStorage.removeItem("Token");
    setAuth({});
    toast.success("Logged out successfully");
  };

  const saveScope1 = async (vehicles, machinery, refrigerant) => {
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
        "Customer Name": auth.name,
        "1. Did your company own or maintain long-term leases on vehicles?":
          scope1[1],
        "1.1 How many litres of gasoline / unleaded petrol did you use in your vehicles?":
          scope1["1.1"],
        "1.2 How much did your company spend on gasoline / unleaded petrol fuel for your vehicles?":
          Number(scope1["1.2"]),
        "1.3 How many litres of diesel did you use in your vehicles?":
          scope1["1.3"],
        "1.4 How much did your company spend on diesel for your vehicles?":
          scope1["1.4"],
        "2. MACHINERY Did your company own or maintain long-term leases on machinery or generators?":
          scope1["2"],
        "2.1 How many litres of gasoline / unleaded petrol did you use in your machinery?":
          Number(scope1["2.1"]),
        "2.2 How much did your company spend on gasoline / unleaded petrol fuel for your machinery?":
          Number(scope1["2.2"]),
        "2.3 How many litres of diesel did you use in your machinery?": Number(
          scope1["2.3"]
        ),
        "2.4 How much did your company spend on diesel for your machinery?":
          Number(scope1["2.4"]),
        "2.5 Approximately how much kerosene did you use in your generators?":
          Number(scope1["2.5"]),
        "3. Do you have commercial air conditioning or refrigerators in your place of business that required servicing?":
          scope1[3],
        "3.1 How many air conditioning units do you have?": Number(
          scope1["3.1"]
        ),
        "3.2 How many refrigeration units do you have?": Number(scope1["3.2"]),
        "3.3 How many times were the air conditioners serviced during the time period?":
          scope1["3.3"],
        "3.4 How many times were your refrigerators serviced during the time period?":
          scope1["3.4"],
      },
    };

    const bodyReport = {
      fields: {
        vehicles: Number(vehicles) + Number(scope1Report.vehicles),
        machinery: Number(machinery) + Number(scope1Report.vehicles),
        refrigerant: Number(refrigerant) + Number(scope1Report.vehicles),
      },
    };

    try {
      const { data } = await axios.post(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Customer%20Answers`,
        bodyData,
        config
      );

      const { report } = await axios.patch(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Reports/recoCyA3wFRFWbw8i`,
        bodyReport,
        config
      );

      setScope1Report(report.fields);

      localStorage.setItem("lastId", data.id);

      toast.success("Scope 1 Saved Successfully");
      navigate("/scope-2");
    } catch (error) {
      console.log(error);
    }
  };

  const saveScope2 = async (kwh, spend) => {
    if (!auth.token) {
      toast.error("Register or log in to submit a response");
      return;
    }

    const lastId = localStorage.getItem("lastId");

    if (!lastId) {
      toast.error("Fill out the scope 1 form first");
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
        "1. How many locations / premises does your company own or lease?":
          scope2[1],
        "2. What country are your business premises located in?": scope2[2],
        "2.1 (Australia) What region or state are you located in?":
          scope2["2.1"],
        "3. How many kilowatt hours (kwh) of electricity did your business consume?":
          Number(scope2[3]),
        "3.1 How much did you spend on electricity?": Number(scope2["3.1"]),
        "4. Do you use LED lighting in your business premises?": scope2[4],
        "4.1 How many lightbulbs are in your business premises?": Number(
          scope2["4.1"]
        ),
        "5. Do you have solar panels installed in your business premises?":
          scope2["5.0"],
        "5.1 Is your business located in a small or large building?": scope2[5],
        "5.1 Is it a single or multi tenant building?": scope2["5.1"],
        "5.2 How's the weather? Is it generally sunny where you are? Are there any trees obstructing the roof?":
          scope2["5.2"],
        "5.3 What is your address?": scope2["5.3"],
      },
    };

    const bodyReport = {
      fields: {
        kwh: Number(kwh) + Number(scope2Report.kwh),
        "spend on electricity":
          Number(spend) + Number(scope2Report["spend on electricity"]),
      },
    };

    try {
      const data = await axios.patch(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Customer%20Answers/${lastId}`,
        bodyData,
        config
      );

      const { report } = await axios.patch(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Reports/rec4JE07Ns1dg80lV`,
        bodyReport,
        config
      );

      setScope2Report(report.fields);

      toast.success("Scope 2 Saved Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const saveScope3 = async (
    travel,
    commuting,
    freight,
    inventory,
    capital,
    services
  ) => {
    if (!auth.token) {
      toast.error("Register or log in to submit a response");
      return;
    }

    const lastId = localStorage.getItem("lastId");

    if (!lastId) {
      toast.error("Fill out the scope 1 form first");
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
        "1. Flights": Number(scope3[1]),
        "1.2 Rental cars": Number(scope3["1.2"]),
        "1.3 Trains": Number(scope3["1.3"]),
        "1.4 Buses": Number(scope3["1.4"]),
        "1.5 Hotel & Restaurants": Number(scope3["1.5"]),

        "2.1 Train travel per week (km)": Number(scope3["2.1"]),
        "2.2 Bus travel per week (km)": Number(scope3["2.2"]),
        "2.3 Walking / cycling travel per week (km)": Number(scope3["2.3"]),
        "2.4 Car travel per week (km)": Number(scope3["2.4"]),
        "2.5 Carpooling travel per week (km)": Number(scope3["2.5"]),
        "2.6 Energy use by employees during days worked at home": Number(
          scope3["2.6"]
        ),

        "3.1 Couriers & road freight": Number(scope3["3.1"]),
        "3.2 Air freight": Number(scope3["3.2"]),
        "3.3 Train freight": Number(scope3["3.3"]),
        "3.4 Sea freight": Number(scope3["3.4"]),

        "4.1 Furniture": Number(scope3["4.1"]),
        "4.2 Packaging & paper": Number(scope3["4.2"]),
        "4.3 Textiles": Number(scope3["4.3"]),
        "4.4 Plastics": Number(scope3["4.4"]),
        "4.5 Metals": Number(scope3["4.5"]),
        "4.6 Wood": Number(scope3["4.6"]),
        "4.7 Chemicals": Number(scope3["4.7"]),
        "4.8 Food, drink and other miscellaneous consumables": Number(
          scope3["4.8"]
        ),
        "4.9 Books & other physical media": Number(scope3["4.9"]),

        "5.1 Purchased vehicles": Number(scope3["5.1"]),
        "5.2 Audio visual & communication products (phones, TVs etc)": Number(
          scope3["5.2"]
        ),
        "5.3 Office hardware (computers, printers, copiers etc)": Number(
          scope3["5.3"]
        ),
        "5.4 Other machinery, tools & equipment": Number(scope3["5.4"]),

        "6.1 Legal, accounting & consultancy services": Number(scope3["6.1"]),
        "6.2 IT Services (includes software, subscriptions, cloud computing, IT outsourcing etc)":
          Number(scope3["6.2"]),
        "6.3 Insurance, Superannuation & pensions": Number(scope3["6.3"]),
        "6.4 Banking fees etc": Number(scope3["6.4"]),
        "6.5 Construction & renovation services": Number(scope3["6.5"]),

        "7.1 How many employees attend the office at least one day per week?":
          Number(scope3["7.1"]),
        "7.2 How many days a week are your staff in the office on average?":
          Number(scope3["7.2"]),
        "7.3 How green is your office?": scope3["7.3"],
      },
    };

    const bodyReport = {
      fields: {
        TRAVEL: Number(travel) + Number(scope3Report.TRAVEL),
        COMMUTING: Number(commuting) + Number(scope3Report.COMMUTING),
        "FREIGHT & WAREHOUSING":
          Number(freight) + Number(scope3Report["FREIGHT & WAREHOUSING"]),
        INVENTORY: Number(inventory) + Number(scope3Report.INVENTORY),
        "CAPITAL GOODS & EXPENSES":
          Number(capital) + Number(scope3Report["CAPITAL GOODS & EXPENSES"]),
        SERVICES: Number(services) + Number(scope3Report.SERVICES),
      },
    };

    try {
      const data = await axios.patch(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Customer%20Answers/${lastId}`,
        bodyData,
        config
      );

      const { report } = await axios.patch(
        `${baseUrl}/appJCp1Y4OgnXBC9C/Reports/rechRbElJ3m82lawO`,
        bodyReport,
        config
      );

      setScope3Report(report.fields);

      toast.success("Scope 3 Saved Successfully");
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
        saveScope2,
        saveScope3,
        scope1Report,
        scope2Report,
        scope3Report,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider };

export default AuthContext;
