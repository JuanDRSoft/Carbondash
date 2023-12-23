import React from "react";
import Select from "../components/Select";
import useAuth from "../hooks/useAuth";

const Scope3 = () => {
  const { scope3, setScope3, saveScope3 } = useAuth();

  const calculateTravel = () => {
    const calc =
      scope3[1] * 0.000853 +
      scope3["1.2"] * 0.000326 +
      scope3["1.3"] * 0.000452 +
      scope3["1.4"] * 0.000743 +
      scope3["1.5"] * 0.000164;

    return calc.toFixed(2);
  };

  const calculateCommuting = () => {
    const calc =
      scope3["2.1"] * 0.041 +
      scope3["2.2"] * 0 +
      scope3["2.3"] * 0 +
      scope3["2.4"] * 0.171 +
      scope3["2.5"] * 0.085;

    return calc.toFixed(2);
  };

  const calculateFreight = () => {
    const calc =
      scope3["3.1"] * 0.000328 +
      scope3["3.2"] * 0.00434 +
      scope3["3.3"] * 0.000188 +
      scope3["3.4"] * 0.00138;

    return calc.toFixed(2) || 0;
  };

  const calculateInventory = () => {
    const calc =
      scope3["4.1"] * 0.000455 +
      scope3["4.2"] * 0.000552 +
      scope3["4.3"] * 0.000805 +
      scope3["4.4"] * 0.000656 +
      scope3["4.5"] * 0.00107 +
      scope3["4.6"] * 0.000903 +
      scope3["4.7"] * 0.000904 +
      scope3["4.8"] * 0.000072 +
      scope3["4.9"] * 0.000156;

    return calc.toFixed(2);
  };

  const calculateCapital = () => {
    const calc =
      scope3["5.1"] * 0.000311 +
      scope3["5.2"] * 0.000339 +
      scope3["5.3"] * 0.000218 +
      scope3["5.4"] * 0.000427;

    return calc.toFixed(2);
  };

  const calculateServices = () => {
    const calc =
      scope3["6.1"] * 0.0 +
      scope3["6.2"] * 0.0 +
      scope3["6.3"] * 0.0 +
      scope3["6.4"] * 0.0 +
      scope3["6.4"] * 0.0 +
      scope3["6.5"] * 0.0;

    return calc.toFixed(2) || 0;
  };

  return (
    <div className="pb-10 lg:flex gap-5">
      <div className="shadow-xl border rounded-3xl bg-white">
        <div className="p-5">
          <h1 className="font-bold text-3xl">Scope 3</h1>
          <p className="mt-4"></p>

          <hr className="mt-5 mb-5" />

          <div>
            <h1 className="font-bold mb-5">Travel</h1>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label>
                  1. Flights
                  <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
                </label>
                <input
                  value={scope3["1"]}
                  onChange={(e) => setScope3({ ...scope3, 1: e.target.value })}
                  type="number"
                  className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                />
              </div>

              <div>
                <label>
                  1.2 Rental cars
                  <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
                </label>
                <input
                  value={scope3["1.2"]}
                  onChange={(e) =>
                    setScope3({ ...scope3, 1.2: e.target.value })
                  }
                  type="number"
                  className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                />
              </div>

              <div>
                <label>
                  1.3 Trains
                  <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
                </label>
                <input
                  value={scope3["1.3"]}
                  onChange={(e) =>
                    setScope3({ ...scope3, 1.3: e.target.value })
                  }
                  type="number"
                  className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                />
              </div>

              <div className="mb-5">
                <label>
                  1.4 Buses
                  <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
                </label>
                <input
                  value={scope3["1.4"]}
                  onChange={(e) =>
                    setScope3({ ...scope3, 1.4: e.target.value })
                  }
                  type="number"
                  className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
                />
              </div>
            </div>

            <label>
              1.5 Hotel & Restaurants
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["1.5"]}
              onChange={(e) => setScope3({ ...scope3, 1.5: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <hr className="mt-5 mb-5" />

            <h1 className="font-bold mb-5">Commuting</h1>

            <p className="mb-5">
              To calculate accurate totals, you will need to survey the
              commuting habits of your employees. Click here to access a
              shareable survey.
            </p>

            <label>
              2.1 Train travel per week (km)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["2.1"]}
              onChange={(e) => setScope3({ ...scope3, 2.1: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              2.2 Bus travel per week (km)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["2.2"]}
              onChange={(e) => setScope3({ ...scope3, 2.2: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              2.3 Walking / cycling travel per week (km)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["2.3"]}
              onChange={(e) => setScope3({ ...scope3, 2.3: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              2.4 Car travel per week (km)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["2.4"]}
              onChange={(e) => setScope3({ ...scope3, 2.4: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              2.5 Carpooling travel per week (km)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["2.5"]}
              onChange={(e) => setScope3({ ...scope3, 2.5: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <hr className="mt-5 mb-5" />

            <h1 className="font-bold mb-5">Freight & Warehousing</h1>

            <label>
              3.1 Couriers & road freight
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["3.1"]}
              onChange={(e) => setScope3({ ...scope3, 3.1: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              3.2 Air freight
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["3.2"]}
              onChange={(e) => setScope3({ ...scope3, 3.2: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              3.3 Train freight
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["3.3"]}
              onChange={(e) => setScope3({ ...scope3, 3.3: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              3.4 Sean freight
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["3.4"]}
              onChange={(e) => setScope3({ ...scope3, 3.4: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <hr className="mt-5 mb-5" />

            <h1 className="font-bold mb-5">Inventory</h1>

            <label>
              4.1 Furniture
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.1"]}
              onChange={(e) => setScope3({ ...scope3, 4.1: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.2 Packaging & paper
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.2"]}
              onChange={(e) => setScope3({ ...scope3, 4.2: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.3 Textiles
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.3"]}
              onChange={(e) => setScope3({ ...scope3, 4.3: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.4 Plastics
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.4"]}
              onChange={(e) => setScope3({ ...scope3, 4.4: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.5 Metals
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.5"]}
              onChange={(e) => setScope3({ ...scope3, 4.5: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.6 Wood
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.6"]}
              onChange={(e) => setScope3({ ...scope3, 4.6: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.7 Chemicals
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.7"]}
              onChange={(e) => setScope3({ ...scope3, 4.7: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.8 Food, drink and other miscellaneous consumables
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.8"]}
              onChange={(e) => setScope3({ ...scope3, 4.8: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              4.9 Books & other physical media
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["4.9"]}
              onChange={(e) => setScope3({ ...scope3, 4.9: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <hr className="mt-5 mb-5" />

            <h1 className="font-bold mb-5">Capital Goods & Expenses</h1>

            <label>
              5.1 Purchased vehicles
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["5.1"]}
              onChange={(e) => setScope3({ ...scope3, 5.1: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              5.2 Audio visual & communication products (phones, TVs etc)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["5.2"]}
              onChange={(e) => setScope3({ ...scope3, 5.2: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              5.3 Office hardware (computers, printers, copiers etc)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["5.3"]}
              onChange={(e) => setScope3({ ...scope3, 5.3: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              5.4 Other machinery, tools & equipment
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["5.4"]}
              onChange={(e) => setScope3({ ...scope3, 5.4: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <hr className="mt-5 mb-5" />

            <h1 className="font-bold mb-5">Services</h1>

            <label>
              6.1 Legal, accounting & consultancy services
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["6.1"]}
              onChange={(e) => setScope3({ ...scope3, 6.1: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              6.2 IT Services (includes software, subscriptions, cloud
              computing, IT outsourcing etc)
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["6.2"]}
              onChange={(e) => setScope3({ ...scope3, 6.2: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              6.3 Insurance, Superannuation & pensions
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["6.3"]}
              onChange={(e) => setScope3({ ...scope3, 6.3: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              6.4 Banking fees etc
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["6.4"]}
              onChange={(e) => setScope3({ ...scope3, 6.4: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              6.5 Construction & renovation services
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["6.5"]}
              onChange={(e) => setScope3({ ...scope3, 6.5: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <hr className="mt-5 mb-5" />

            <h1 className="font-bold mb-5">Waste Removal</h1>

            <label>
              7.1 How many employees attend the office at least one day per
              week?
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>
            <input
              value={scope3["7.1"]}
              onChange={(e) => setScope3({ ...scope3, 7.1: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              7.2 How many days a week are your staff in the office on average?
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>

            <p className="text-xs font-semibold text-gray-400">
              You should have this data via the inputs from the commuting survey
            </p>

            <input
              value={scope3["7.2"]}
              onChange={(e) => setScope3({ ...scope3, 7.2: e.target.value })}
              type="number"
              className="mt-4 w-full outline-[#2dbf1d] bg-white py-2 pl-3 pr-3 text-left border rounded-lg sm:text-sm"
            />

            <label>
              7.3 How green is your office?
              <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
            </label>

            <div className="mt-3">
              <Select
                value={scope3["7.3"]}
                set={(e) => setScope3({ ...scope3, 7.3: e })}
                people={[
                  "Strictly paperless",
                  "Moderately paperless",
                  "No paperless policy",
                  "Strict recycling",
                  "Moderate recycling",
                  "No recycling",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="bg-[#E5FAE6] rounded-b-3xl p-6 flex justify-end pr-16">
          <button
            onClick={() =>
              saveScope3(
                calculateTravel(),
                calculateCommuting(),
                calculateFreight(),
                calculateInventory(),
                calculateCapital(),
                calculateServices()
              )
            }
            className="bg-[#2dbf1d] px-6 p-1 rounded-lg font-bold text-white"
          >
            Save
          </button>
        </div>
      </div>

      <div className="shadow-xl border rounded-3xl mt-10 lg:mt-0 bg-white">
        <h1 className="text-center mt-10 font-bold text-3xl"></h1>

        <div className="p-10 flex-wrap justify-center lg:grid sm:flex grid pt-5 gap-5 lg:gap-10">
          <div className="flex items-center gap-3">
            <i class="fas fa-passport text-4xl text-[#2dbf1d]"></i>
            <div>
              <h1 className="font-bold text-xl">TRAVEL</h1>
              <p className="font-semibold text-[#005504] text-lg">
                {calculateTravel()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <i class="fas fa-car-side text-4xl text-[#2dbf1d]"></i>
            <div>
              <h1 className="font-bold text-xl">COMMUTING</h1>
              <p className="font-semibold text-[#005504] text-lg">
                {calculateCommuting()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <i class="fas fa-pallet text-4xl text-[#2dbf1d]"></i>
            <div>
              <h1 className="font-bold text-xl">FREIGHT & WAREHOUSING</h1>
              <p className="font-semibold text-[#005504] text-lg">
                {calculateFreight()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <i class="fas fa-boxes text-4xl text-[#2dbf1d]"></i>
            <div>
              <h1 className="font-bold text-xl">INVENTORY</h1>
              <p className="font-semibold text-[#005504] text-lg">
                {calculateInventory()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <i class="fas fa-tools text-4xl text-[#2dbf1d]"></i>
            <div>
              <h1 className="font-bold text-xl">CAPITAL GOODS & EXPENSES</h1>
              <p className="font-semibold text-[#005504] text-lg">
                {calculateCapital()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <i class="fas fa-file-contract text-4xl text-[#2dbf1d]"></i>
            <div>
              <h1 className="font-bold text-xl">SERVICES</h1>
              <p className="font-semibold text-[#005504] text-lg">
                {calculateServices()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#E5FAE6] rounded-b-3xl p-6">
          <h1 className="text-xl uppercase text-center font-bold">Total</h1>
          <p className="text-center font-semibold text-[#005504] text-lg">
            {(
              Number(calculateTravel()) +
              Number(calculateCommuting()) +
              Number(calculateFreight()) +
              Number(calculateInventory()) +
              Number(calculateServices()) +
              Number(calculateCapital())
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scope3;
