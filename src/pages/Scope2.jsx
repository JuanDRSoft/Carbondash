import React, { useState } from "react";
import Select from "../components/Select";

const Scope2 = () => {
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

  const [progress, setProgress] = useState(0);

  return (
    <div className="shadow rounded">
      <div className="w-full h-2 bg-gray-100 relative">
        <div
          className="absolute h-2 bg-[#2dbf1d] top-0 left-0"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="grid grid-cols-2 p-5">
        <div className="md:border-r md:pr-2">
          <h1 className="font-bold italic text-xl mb-2">Scope 2</h1>
          <p className="font-semibold text-gray-500 mb-8 text-sm">
            Answer a few simple questions and your Scope 2 carbon emissions will
            be calculated. Onward!
          </p>

          <label>
            1. Do you have your electricity bill handy that shows your
            electricity consumption data?
          </label>
          <Select
            value={scope2[1]}
            set={(e) => setScope2({ ...scope2, 1: e })}
          />

          <label>
            1a. How many kilowatt hours (kwh) of electricity did your business
            consume during the time period? copy
          </label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope2["1a"]}
            onChange={(e) => setScope2({ ...scope2, "1a": e.target.value })}
            type="number"
          />

          <label>
            1b. How much did you spend on electricity during the time period?
          </label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope2["1b"]}
            onChange={(e) => setScope2({ ...scope2, "1b": e.target.value })}
            type="number"
          />

          <label>2. Do you use LED lighting in your office(s)?</label>
          <Select
            value={scope2[2]}
            set={(e) => setScope2({ ...scope2, 2: e })}
          />
        </div>

        <div className="md:pl-2 xl:px-2">
          {/* <label>
            2a. How many litres of diesel fuel did you use during the time
            period in your vehicles?
          </label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope2["2a"]}
            onChange={(e) => setScope2({ ...scope2, "2a": e.target.value })}
            type="number"
          /> */}

          <label>2b. How many lightbulbs are in your office(s)?</label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope2["2b"]}
            onChange={(e) => setScope2({ ...scope2, "2b": e.target.value })}
            type="number"
          />

          <label>
            3. Do you have smart energy meters installed in your business
            premises?
          </label>
          <Select
            value={scope2[3]}
            set={(e) => setScope2({ ...scope2, 3: e })}
          />

          {/* <label>3a. How many litres of fuel did you use?</label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope2["3a"]}
            onChange={(e) => setScope2({ ...scope2, "3a": e.target.value })}
            type="number"
          /> */}

          <label>
            4. Do you own or have a long-term lease of your business premises?
          </label>
          <Select
            value={scope2[4]}
            set={(e) => setScope2({ ...scope2, 4: e.target.value })}
          />

          <label>
            4a. Are your business premises less than 5 storeys tall and located
            in a generally sunny area??
          </label>
          <Select
            value={scope2["4a"]}
            set={(e) => setScope2({ ...scope2, "4a": e.target.value })}
          />

          <label>4b. Do you know how many square metres the roof is?</label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope2["4b"]}
            onChange={(e) => setScope2({ ...scope2, "4b": e.target.value })}
            type="number"
          />

          <label>4c. What is your business address?</label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope2["4c"]}
            onChange={(e) => setScope2({ ...scope2, "4c": e.target.value })}
            type="number"
          />
        </div>
      </div>

      <div className="flex justify-center pb-5 pt-5">
        <button className="font-bold text-xl hover:bg-green-700 w-[80%] text-white rounded-full shadow bg-[#2dbf1d] md:w-[50%] xl:w-[35%] p-2">
          SAVE <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Scope2;
