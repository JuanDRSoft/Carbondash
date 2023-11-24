import React, { useEffect, useState } from "react";
import Select from "../components/Select";
import useAuth from "../hooks/useAuth";

const Scope3 = () => {
  const [subs, setSubs] = useState({
    train: 0,
    Flights: 0,
    Bus: 0,
    Car: 0,
    hotel: 0,
    //
    Road: 0,
    Air: 0,
    sea: 0,
    rail: 0,
    otherTrans: 0,
    //
    Furniture: 0,
    paper: 0,
    Textiles: 0,
    plastic: 0,
    metal: 0,
    chemicals: 0,
    otherFood: 0,
    book: 0,
    //
    phones: 0,
    computers: 0,
    purchased: 0,
    otherMachinery: 0,
    //
    legal: 0,
    software: 0,
    insurance: 0,
    financial: 0,
    construction: 0,
  });

  const { scope3, setScope3 } = useAuth();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setScope3({
      ...scope3,
      "Business Travel":
        Number(subs.train) +
        Number(subs.Flights) +
        Number(subs.Bus) +
        Number(subs.Car) +
        Number(subs.hotel),
      "Transport / freight":
        Number(subs.Road) +
        Number(subs.Air) +
        Number(subs.sea) +
        Number(subs.otherTrans) +
        Number(subs.rail),
      "Materials & inventory":
        Number(subs.Furniture) +
        Number(subs.paper) +
        Number(subs.Textiles) +
        Number(subs.plastic) +
        Number(subs.metal) +
        Number(subs.chemicals) +
        Number(subs.otherFood) +
        Number(subs.book),
      "Capital goods":
        Number(subs.phones) +
        Number(subs.computers) +
        Number(subs.purchased) +
        Number(subs.otherMachinery),
      Services:
        Number(subs.legal) +
        Number(subs.software) +
        Number(subs.insurance) +
        Number(subs.construction) +
        Number(subs.financial),
    });
  }, [subs]);

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
          <h1 className="font-bold italic text-xl mb-2">Scope 3</h1>
          <p className="font-semibold text-gray-500 mb-8 text-sm">
            What were your company’s total expenses?
          </p>

          <div className="flex justify-between">
            <label className="font-bold">Business Travel</label>
            <label>Total: {scope3["Business Travel"]}</label>
          </div>

          <div className="flex justify-between items-baseline mt-2">
            <label className="w-full">Train</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.train}
              onChange={(e) => setSubs({ ...subs, train: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Flights</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.Flights}
              onChange={(e) => setSubs({ ...subs, Flights: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Bus</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.Bus}
              onChange={(e) => setSubs({ ...subs, Bus: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Car Rental</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.Car}
              onChange={(e) => setSubs({ ...subs, Car: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Hotel & restaurants</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.hotel}
              onChange={(e) => setSubs({ ...subs, hotel: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between mt-5">
            <label className="font-bold">Transport / freight</label>
            <label>Total: {scope3["Transport / freight"]}</label>
          </div>

          <div className="flex justify-between items-baseline mt-2">
            <label className="w-full">Road freight</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.Road}
              onChange={(e) => setSubs({ ...subs, Road: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Air freight</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.Air}
              onChange={(e) => setSubs({ ...subs, Air: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Sea freight</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.sea}
              onChange={(e) => setSubs({ ...subs, sea: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Rail freight</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.rail}
              onChange={(e) => setSubs({ ...subs, rail: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">
              Other transport services (warehousing etc)
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.otherTrans}
              onChange={(e) => setSubs({ ...subs, otherTrans: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between mt-5">
            <label className="font-bold">Capital goods</label>
            <label>Total: {scope3["Capital goods"]}</label>
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">
              Phones, TVs and communication equipment
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.phones}
              onChange={(e) => setSubs({ ...subs, phones: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Computers and office machinery</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.computers}
              onChange={(e) => setSubs({ ...subs, computers: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Purchased vehicles</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.purchased}
              onChange={(e) => setSubs({ ...subs, purchased: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Other machinery, tools & equipment</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.otherMachinery}
              onChange={(e) =>
                setSubs({ ...subs, otherMachinery: e.target.value })
              }
              type="number"
            />
          </div>
        </div>

        <div className="md:pl-2 xl:px-2">
          <div className="flex justify-between mt-5">
            <label className="font-bold">Materials & inventory</label>
            <label>Total: {scope3["Materials & inventory"]}</label>
          </div>

          <div className="flex justify-between items-baseline mt-2">
            <label className="w-full">Furniture</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.Furniture}
              onChange={(e) => setSubs({ ...subs, Furniture: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Paper & packaging</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.paper}
              onChange={(e) => setSubs({ ...subs, paper: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Textiles</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.Textiles}
              onChange={(e) => setSubs({ ...subs, Textiles: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Plastic products</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.plastic}
              onChange={(e) => setSubs({ ...subs, plastic: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Metal products</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.metal}
              onChange={(e) => setSubs({ ...subs, metal: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Chemicals and pharmaceuticals</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.chemicals}
              onChange={(e) => setSubs({ ...subs, chemicals: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">
              Other general products eg food miscellaneous inventory
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.otherFood}
              onChange={(e) => setSubs({ ...subs, otherFood: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">
              Books, movies & related items (physical media)
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.book}
              onChange={(e) => setSubs({ ...subs, book: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between mt-5">
            <label className="font-bold">Services</label>
            <label>Total: {scope3["Services"]}</label>
          </div>

          <div className="flex justify-between items-baseline mt-2">
            <label className="w-full">
              Legal, accounting & management consultancy
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.legal}
              onChange={(e) => setSubs({ ...subs, legal: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">
              Software, hosting, programming, IT services Example: IT
              consultants, outsourced programming, Subscriptions, data hosting
              services, softwares, digital advertising
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.software}
              onChange={(e) => setSubs({ ...subs, software: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">Insurance and pension funding</label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.insurance}
              onChange={(e) => setSubs({ ...subs, insurance: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">
              Financial intermediation (eg banking charges)
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.financial}
              onChange={(e) => setSubs({ ...subs, financial: e.target.value })}
              type="number"
            />
          </div>

          <div className="flex justify-between items-baseline">
            <label className="w-full">
              Construction and maintenance,Example: Construction projects,
              maintenance or renovations
            </label>
            <input
              className="border-b border-[#2dbf1d] w-full py-2 pl-3 outline-none mb-2"
              value={subs.construction}
              onChange={(e) =>
                setSubs({ ...subs, construction: e.target.value })
              }
              type="number"
            />
          </div>
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

export default Scope3;
