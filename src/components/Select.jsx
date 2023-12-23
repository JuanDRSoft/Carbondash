import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Select = ({ value, set, people }) => {
  const [selected, setSelected] = useState({
    name: "Type or select an option",
  });

  return (
    <div className="">
      <Listbox value={value || selected} onChange={(e) => set(e)}>
        <div className="relative mt-4 mb-5 ">
          <Listbox.Button className="relative w-full outline-[#2dbf1d]  focus:outline outline-2 bg-white py-2 pl-3 pr-10 text-left border rounded-lg sm:text-sm">
            <span className="truncate bg-[#E5FAE6] rounded-full px-2">
              {value || selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 z-10 outline-[#2dbf1d]  focus:outline outline-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-green-100 text-green-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          value == person ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person}
                      </span>
                      {value == person ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
