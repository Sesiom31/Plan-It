/* import CategoriesList from "./CategoriesList";
import { MdOutlineAddCircle } from "react-icons/md"; */

import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import clsx from "clsx";
import { useState } from "react";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

function CategoriesTasks() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <div className="mx-auto h-auto w-full bg-orange-500 pt-20">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg bg-white/5 py-1.5 pl-3 pr-8 text-left text-sm/6 text-white",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25",
          )}
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute right-2.5 top-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-full rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:--spacing(1)] focus:outline-none",
            "data-leave:data-closed:opacity-0 transition duration-100 ease-in",
          )}
        >
          {people.map((person) => (
            <ListboxOption
              key={person.name}
              value={person}
              className="data-focus:bg-white/10 group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5"
            >
              <CheckIcon className="group-data-selected:visible invisible size-4 fill-white" />
              <div className="text-sm/6 text-white">{person.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}

export default CategoriesTasks;

/* <div className="h-full w-full">
      <div className="flex flex-col gap-2 px-4">
        <div></div>

        <button
          type="button"
          className="flex h-14 w-full items-center justify-between rounded-lg bg-contrast px-4 py-1 font-bold text-main"
        >
          Agregar categoría
          <MdOutlineAddCircle className="size-8 text-main" />
        </button>
        <h2 className="mt-4 py-1 text-2xl font-bold text-white">
          Categorías:{" "}
        </h2>

        <CategoriesList />
      </div>
    </div> */
