import React from "react";

const Reduce = () => {
  return (
    <div className="h-[81.1vh] flex justify-center items-center">
      <div className="w-[50%]">
        <h1 className="text-center font-bold text-5xl mb-5">
          Reduce Emissions
        </h1>

        <p className="text-xl text-center">
          Review the list of personalised emission reduction strategies below
          and apply them to your business to reduce your carbon footprint
        </p>

        <ul className="mt-10 grid gap-5 justify-center">
          <li className="flex gap-3 items-center">
            <i class="fas fa-check text-green-500 text-xl"></i>
            Switch your electricity provider to a company that generates
            renewable energy
          </li>

          <li className="flex gap-3 items-center">
            <i class="fas fa-check text-green-500 text-xl"></i>
            Install LED lighting in your business premises
          </li>

          <li className="flex gap-3 items-center">
            <i class="fas fa-check text-green-500 text-xl"></i>
            Build a list of carbon neutral or low carbon suppliers in your value
            chain
          </li>

          <li className="flex gap-3 items-center">
            <i class="fas fa-check text-green-500 text-xl"></i>
            Encourage staff to reduce emissions at home
          </li>
        </ul>

        <div className="flex justify-center mt-20">
          <button className="p-3 px-10 bg-green-900 text-white rounded-full">
            Download Full Emission Reduction Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reduce;
