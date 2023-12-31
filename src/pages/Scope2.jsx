import React, { useEffect, useState } from "react";
import Select from "../components/Select";
import useAuth from "../hooks/useAuth";

const Scope2 = () => {
  const { scope2, setScope2, saveScope2 } = useAuth();
  const [progress, setProgress] = useState(0);
  const [kwh, setkwh] = useState(0);
  const [spend, setSpend] = useState(0);
  const [emission, setEmission] = useState(0);

  useEffect(() => {
    if (scope2[3] > 0) {
      setkwh(Number(scope2[3]) * emission);
    } else if (scope2["3.1"] > 0) {
      setSpend(Number(scope2["3.1"]) * emission);
    }

    if (scope2["2.1"]) {
      switch (scope2["2.1"]) {
        case "NSW":
          setEmission(0.68);
          break;
        case "VIC":
          setEmission(0.79);
          break;
        case "QLD":
          setEmission(0.73);
          break;
        case "ACT":
          setEmission(0.68);
          break;
        case "TAS":
          setEmission(0.12);
          break;
        case "SA":
          setEmission(0.25);
          break;
        case "NT":
          setEmission(0.54);
          break;
        case "WA":
          setEmission(0.62);
          break;
      }
    }
  }, [scope2]);

  const calculateElectricity = () => {
    if (scope2["2.1"]) {
      const calc = (Number(scope2[3]) + Number(scope2["3.1"])) * emission;

      return calc.toFixed(2);
    } else {
      return 0;
    }
  };

  return (
    <div className="pb-10 lg:flex gap-5">
      <div className="shadow-xl rounded-3xl bg-white border">
        <div className="p-5">
          <h1 className="font-bold text-3xl">Scope 2</h1>
          <p className="mt-4">
            Scope 2 are emissions that are caused 'indirectly' from the
            consumption of electricity in your business premises. You should
            have your electricity bill handy to accurately provide information
            for this section. See our Scope 2 guide for more info.
          </p>
          <hr className="mt-5 mb-5" />
          <h1 className="font-bold mb-5">ELECTRICITY</h1>
          <label>
            1. How many locations / premises does your company own or lease?
            <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
          </label>
          <div className="mt-3">
            <Select
              value={scope2["1"]}
              set={(e) => setScope2({ ...scope2, 1: e })}
              people={[
                "0 - fully remote",
                "1",
                "2",
                "3",
                "4",
                "5",
                "More than 5",
              ]}
            />
          </div>
          <label>
            2. What country are your business premises located in?
            <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
          </label>
          <div className="mt-3">
            <Select
              value={scope2["2"]}
              set={(e) => setScope2({ ...scope2, 2: e })}
              people={[
                "Australia",
                "New Zealand",
                "USA",
                "Canada",
                "United Kingdom",
                "Ireland",
                "Philippines",
                "Malaysia",
                "Thailand",
                "Singapore",
                "Indonesia",
                "Vietnam",
                "Portugal",
                "Spain",
                "Germany",
                "Other",
              ]}
            />
          </div>
          {scope2["2"].includes("Australia") && (
            <>
              <label>
                2.1 (Australia) What region or state are you located in?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>

              <div className="mt-3">
                <Select
                  value={scope2["2.1"]}
                  set={(e) => setScope2({ ...scope2, 2.1: e })}
                  people={["NSW", "VIC", "QLD", "ACT", "TAS", "SA", "NT", "WA"]}
                />
              </div>
            </>
          )}
          <div className="grid grid-cols-2 gap-10 mb-5">
            <div>
              <label>
                3. How many kilowatt hours (kwh) of electricity did your
                business consume?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>
              <p className="text-xs font-semibold text-gray-400">
                If you're unsure, leave this blank and answer question 3.1
              </p>

              <input
                value={scope2["3"]}
                onChange={(e) => setScope2({ ...scope2, 3: e.target.value })}
                type="number"
                disabled={scope2["3.1"] > 0}
                className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
              />
            </div>

            <div>
              <label>
                3.1 How much did you spend on electricity?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>
              <p className="text-xs font-semibold text-gray-400">
                Leave this blank if you answered question 3
              </p>
              <input
                value={scope2["3.1"]}
                onChange={(e) => setScope2({ ...scope2, 3.1: e.target.value })}
                type="number"
                disabled={scope2[3] > 0}
                className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
              />
            </div>
          </div>
          <label>
            4. Do you use LED lighting in your business premises?
            <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
          </label>
          <div className="mt-3">
            <Select
              value={scope2["4"]}
              set={(e) => setScope2({ ...scope2, 4: e })}
              people={["Yes", "No"]}
            />
          </div>
          {scope2["4"].includes("NO") && (
            <>
              <label>
                4.1 How many lightbulbs are in your business premises?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>

              <input
                value={scope2["4.1"]}
                onChange={(e) => setScope2({ ...scope2, 4.1: e.target.value })}
                type="number"
                className="mt-4 mb-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
              />
            </>
          )}
          <label>
            5. Do you have solar panels installed in your business premises?
            <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
          </label>
          <div className="mt-3">
            <Select
              value={scope2["5.0"]}
              set={(e) => setScope2({ ...scope2, "5.0": e })}
              people={["Yes", "No"]}
            />
          </div>

          {scope2["5.0"].includes("No") && (
            <>
              <label>
                5.1 Is your business located in a small or large building?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>{" "}
              <p className="text-xs font-semibold text-gray-400">
                Large is considered anything above 5 storeys tall
              </p>
              <div className="mt-3">
                <Select
                  value={scope2["5"]}
                  set={(e) => setScope2({ ...scope2, 5: e })}
                  people={["Small", "Large", "No building - we work remotely"]}
                />
              </div>
            </>
          )}

          {scope2["5"].includes("Small") && (
            <>
              <label>
                5.2 Is it a single or multi tenant building?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>

              <div className="mt-3">
                <Select
                  value={scope2["5.1"]}
                  set={(e) => setScope2({ ...scope2, 5.1: e })}
                  people={["Single tenant", "Multi tenant"]}
                />
              </div>
            </>
          )}
          {scope2["5.1"] !== "" && (
            <>
              <label>
                5.3 How's the weather? Is it generally sunny where you are? Are
                there any trees obstructing the roof?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>
              <div className="mt-3">
                <Select
                  value={scope2["5.2"]}
                  set={(e) => setScope2({ ...scope2, 5.2: e })}
                  people={[
                    "Generally sunny, no trees obstructing the roof",
                    "Generally sunny, but there may be some obstructions of the roof",
                    "Generally not very sunny",
                  ]}
                />
              </div>
            </>
          )}

          {scope2["5.2"] !== "" && (
            <>
              <label>
                5.4 What is your address?
                <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
              </label>
              <input
                value={scope2["5.3"]}
                onChange={(e) => setScope2({ ...scope2, 5.3: e.target.value })}
                type="text"
                className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
              />
            </>
          )}
        </div>

        <div className="bg-[#E5FAE6] rounded-b-3xl p-6 flex justify-end pr-16">
          <button
            onClick={() => saveScope2(kwh, spend)}
            className="bg-[#2dbf1d] px-6 p-1 rounded-lg font-bold text-white"
          >
            Save
          </button>
        </div>
      </div>

      <div className="shadow-xl border rounded-3xl mt-10 lg:mt-0 bg-white relative pb-24">
        <h1 className="text-center mt-5 font-bold text-3xl">CO2</h1>

        <div className="flex items-center gap-3 justify-center p-10">
          <i class="fas fa-plug text-4xl text-[#2dbf1d]"></i>
          <div>
            <h1 className="font-bold text-xl">ELECTRICITY</h1>
            <p className="font-semibold text-[#005504] text-lg">
              {calculateElectricity()}
            </p>
          </div>
        </div>

        <div className="bg-[#E5FAE6] rounded-b-3xl p-3 absolute bottom-0 w-full">
          <h1 className="text-xl uppercase text-center font-bold">Total</h1>
          <p className="text-center font-semibold text-[#005504] text-lg">
            {calculateElectricity()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scope2;
