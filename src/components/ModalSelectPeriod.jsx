import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";
import Select from "./Select";
import { toast } from "react-toastify";

const ModalSelectPeriod = ({ isOpen, setIsOpen }) => {
  const { scope1, setScope1 } = useAuth();

  function closeModal() {
    if ([scope1.time].includes("")) {
      toast.warn("First select a period");
      return;
    }
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <label>
                    What time period would you like to calculate emissions for?
                    <i class="fas fa-info-circle text-sm ml-1 text-[#2dbf1d]"></i>
                  </label>

                  <div className="mt-3">
                    <Select
                      value={scope1.time}
                      set={(e) => setScope1({ ...scope1, time: e })}
                      people={[
                        "FY 2024-25",
                        "Calendar year 2024",
                        "FY 2023-24",
                        "Calendar year 2023",
                        "FY 2022-23",
                        "Calendar year 2022",
                        "FY 2021-22",
                        "Calendar year 2021",
                        "FY 2020-21",
                        "Calendar year 2020",
                      ]}
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={closeModal}
                      className="bg-green-500 w-[50%] font-medium text-white px-5 py-2 rounded-lg"
                    >
                      Next
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalSelectPeriod;
