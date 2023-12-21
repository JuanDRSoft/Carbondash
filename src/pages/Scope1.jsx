import React, { useEffect, useState } from "react";
import Select from "../components/Select";
import useAuth from "../hooks/useAuth";
import { maintains, yesNo } from "../utils/Data";

const Scope1 = () => {
  const { scope1, setScope1, saveScope1 } = useAuth();
  const [progress, setProgress] = useState(0);

  return (
    <div className="pb-10">
      <div className="shadow-xl border rounded-3xl">
        <div className="p-5">
          <h1 className="font-bold text-3xl">Scope 1</h1>
          <p className="mt-4">
            Scope 1 emissions are the direct emissions caused by specific assets
            that are owned or leased by an organisation. Typically, these
            emissions are the fuel you put in your vehicles and machinery. View
            our Scope 1 documentation for more info.
          </p>

          <hr className="mt-5 mb-5" />

          <div>
            <h1 className="font-bold mb-5">VEHICLES</h1>

            <label>
              1. Did your company own or maintain long-term leases on vehicles?
            </label>

            <div className="mt-3">
              <Select
                value={scope1["1"]}
                set={(e) => setScope1({ ...scope1, 1: e })}
                people={[
                  "Gasoline / unleaded petrol vehicles",
                  "Diesel vehicles",
                  "None of the above",
                ]}
              />
            </div>

            {scope1["1"].includes("Gasoline") && (
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label>
                    1.1 How many litres of gasoline / unleaded petrol did you
                    use in your vehicles?
                  </label>

                  <Select
                    value={scope1["1.1"]}
                    set={(e) => setScope1({ ...scope1, 1.1: e })}
                    people={[12.0, 213.0, 500.0]}
                  />
                </div>

                <div>
                  <label>
                    1.2 How much did your company spend on gasoline / unleaded
                    petrol fuel for your vehicles?
                  </label>
                  <input
                    value={scope1["1.2"]}
                    onChange={(e) => setScope1({ ...scope1, 1.2: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>
              </div>
            )}

            {scope1["1"].includes("Diesel") && (
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label>
                    1.3 How many litres of diesel did you use in your vehicles?
                  </label>

                  <input
                    value={scope1["1.3"]}
                    onChange={(e) => setScope1({ ...scope1, 1.3: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>

                <div>
                  <label>
                    1.4 How much did your company spend on diesel for your
                    vehicles?
                  </label>

                  <input
                    value={scope1["1.4"]}
                    onChange={(e) => setScope1({ ...scope1, 1.4: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>
              </div>
            )}

            <hr className="mt-5" />

            <h1 className="font-bold mb-5 mt-5">MACHINERY</h1>

            <label>
              2. MACHINERY Did your company own or maintain long-term leases on
              machinery or generators?
            </label>

            <Select
              value={scope1["2"]}
              set={(e) => setScope1({ ...scope1, 2: e })}
              people={[
                "Gasoline / unleaded petrol machinery (including generators)",
                "Diesel machinery (including generators)",
                "Generators using kerosene",
              ]}
            />

            {scope1["2"].includes("Gasoline") && (
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label>
                    2.1 How many litres of gasoline / unleaded petrol did you
                    use in your machinery?
                  </label>

                  <input
                    value={scope1["2.1"]}
                    onChange={(e) => setScope1({ ...scope1, 2.1: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>

                <div>
                  <label>
                    2.2 How much did your company spend on gasoline / unleaded
                    petrol fuel for your machinery?
                  </label>

                  <input
                    value={scope1["2.2"]}
                    onChange={(e) => setScope1({ ...scope1, 2.2: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>
              </div>
            )}

            {scope1["2"].includes("Diesel") && (
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label>
                    2.3 How many litres of diesel did you use in your machinery?
                  </label>

                  <input
                    value={scope1["2.3"]}
                    onChange={(e) => setScope1({ ...scope1, 2.3: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>

                <div>
                  <label>
                    2.4 How much did your company spend on diesel for your
                    machinery?
                  </label>

                  <input
                    value={scope1["2.4"]}
                    onChange={(e) => setScope1({ ...scope1, 2.4: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>
              </div>
            )}

            {scope1["2"].includes("kerosene") && (
              <div className="mt-5">
                <label>
                  2.5 Approximately how much kerosene did you use in your
                  generators?
                </label>

                <input
                  value={scope1["2.5"]}
                  onChange={(e) => setScope1({ ...scope1, 2.5: e })}
                  type="number"
                  className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                />
              </div>
            )}

            <hr className="mt-5" />

            <h1 className="mt-5 mb-5 font-bold">REFRIGERANT & COOLING</h1>

            <label>
              3. Do you have commercial air conditioning or refrigerators in
              your place of business that required servicing?
            </label>

            <Select
              value={scope1["3"]}
              set={(e) => setScope1({ ...scope1, 3: e })}
              people={["Air conditioners", "Refrigeration units"]}
            />

            {scope1["3"].includes("Air conditioners") && (
              <div>
                <div>
                  <label>
                    3.1 How many air conditioning units do you have?
                  </label>

                  <input
                    value={scope1["3.1"]}
                    onChange={(e) => setScope1({ ...scope1, 3.1: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>

                <label>
                  3.3 How many times were the air conditioners serviced during
                  the time period?
                </label>
                <Select
                  value={scope1["3.3"]}
                  set={(e) => setScope1({ ...scope1, 3.3: e })}
                  people={[0, 1, 2, 3, 4, 5]}
                />
              </div>
            )}

            {scope1["3"].includes("Refrigeration") && (
              <div>
                <div>
                  <label>3.2 How many refrigeration units do you have?</label>

                  <input
                    value={scope1["3.2"]}
                    onChange={(e) => setScope1({ ...scope1, 3.2: e })}
                    type="number"
                    className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                  />
                </div>

                <label>
                  3.4 How many times were your refrigerators serviced during the
                  time period?
                </label>
                <Select
                  value={scope1["3.4"]}
                  set={(e) => setScope1({ ...scope1, 3.4: e })}
                  people={[0, 1, 2, 3, 4, 5]}
                />
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#E5FAE6] rounded-b-3xl p-6 flex justify-end pr-16">
          <button className="bg-[#2dbf1d] px-6 p-1 rounded-lg font-bold text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scope1;
