import React from "react";

const CostSavings = () => {
  return (
    <div>
      <div className="pt-20 pb-20">
        <h1 className="text-5xl font-bold text-center">
          Activate Cost Savings
        </h1>

        <div className="grid lg:grid-cols-4 grid-cols-2 px-10 mt-10 gap-10">
          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">Energy</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>Click to access your quote</p>
          </div>

          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">Solar</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>Click to access your quote</p>
          </div>

          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">LED Lighting</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>Click to access your quote</p>
          </div>

          <div className="grid justify-center bg-slate-100 p-20 gap-3">
            <h1 className="text-3xl font-bold text-center">Insurance</h1>
            <div className="flex justify-center">
              <hr className="w-20 h-1 border-none bg-gray-300" />
            </div>
            <p>Click to access your quote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostSavings;
