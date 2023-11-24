import React, { useEffect, useState } from "react";
import Select from "../components/Select";
import useAuth from "../hooks/useAuth";

const Scope1 = () => {
  const { scope1, setScope1 } = useAuth();
  const [progress, setProgress] = useState(0);

  return (
    <div className="shadow rounded">
      <div className="w-full h-2 bg-gray-100 relative">
        <div
          className="absolute h-2 bg-[#2dbf1d] top-0 left-0"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="grid md:grid-cols-2 p-5">
        <div className="md:border-r md:pr-2">
          <h1 className="font-bold italic text-xl mb-2">Scope 1</h1>
          <p className="font-semibold text-gray-500 mb-8 text-sm">
            Answer a few simple questions and your Scope 1 carbon emissions will
            be calculated. Let's do this!
          </p>

          <label>
            1. Did your company own or maintain long-term leases on vehicles?
          </label>
          <Select
            value={scope1[1]}
            set={(e) => setScope1({ ...scope1, 1: e })}
          />

          <label>
            1a. How many litres of petrol and diesel fuel did your company’s
            vehicles use?
          </label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope1["1a"]}
            onChange={(e) => setScope1({ ...scope1, "1a": e.target.value })}
            type="number"
          />

          <label>
            1b. How much did your company spend on petrol and diesel fuel for
            vehicles?
          </label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope1["1b"]}
            onChange={(e) => setScope1({ ...scope1, "1b": e.target.value })}
            type="number"
          />
        </div>

        <div className="md:pl-2 xl:px-2">
          <label>
            2. Did your company own or maintain long-term leases on machinery?
          </label>
          <Select
            value={scope1[2]}
            set={(e) => setScope1({ ...scope1, 2: e })}
          />

          <label>
            2a. How many litres of petrol and diesel fuel did your company’s
            machinery use?
          </label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope1["2a"]}
            onChange={(e) => setScope1({ ...scope1, "2a": e.target.value })}
            type="number"
          />

          <label>
            2b. How much did your company spend on petrol and diesel fuel for
            machinery?
          </label>
          <input
            className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-5"
            value={scope1["2b"]}
            onChange={(e) => setScope1({ ...scope1, "2b": e.target.value })}
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

export default Scope1;
