import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { RxCaretDown, RxCaretUp, RxCheck } from "react-icons/rx";

import { categoriesTask } from "../../data/categoriesTask";
import clsx from "clsx";
import { useState } from "react";

function TasksHome() {
  const [selected, setSelected] = useState(categoriesTask[0]);

  return (
    <Field className="h-20 w-full px-4 py-2">
      <Label className="text-gray-400">Categorías: </Label>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative mt-2 flex h-10 w-full items-center justify-between rounded-lg bg-oscuro px-4 text-white",
            "data-[open]:outline:none group border-none outline-none",
          )}
        >
          <h3 className="w-1/2 text-left">{selected.name}</h3>
          <div className="flex w-1/2 items-center justify-between gap-8 pl-4">
            <span className="text-left text-gray-400">
              {selected.cant.toString().padStart(2, "0")}
              {` tarea${selected.cant > 1 ? "s" : ""}`}
            </span>
            <div className="size-8">
              <RxCaretDown className="size-full group-data-[open]:hidden" />
              <RxCaretUp className="hidden size-full group-data-[open]:block" />
            </div>
          </div>
        </ListboxButton>

        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "mx-auto mt-2 w-[calc(100%-2rem)] rounded-lg bg-oscuro p-2 focus:outline-none",
            "origin-top transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",
          )}
        >
          {categoriesTask.map((categorie) => (
            <ListboxOption
              key={categorie.name}
              value={categorie}
              className={clsx(
                "group flex h-10 items-center justify-between rounded-lg px-4 py-1.5 text-white",
                "data-[focus]:bg-dividers data-[selected]:bg-dividers",
              )}
            >
              <h3 className="w-1/2 text-left">{categorie.name}</h3>
              <div className="flex w-1/2 items-center justify-between">
                <span className="pl-4 text-left">
                  {categorie.cant.toString().padStart(2, "0")}
                  {` tarea${categorie.cant > 1 ? "s" : ""}`}
                </span>
                <RxCheck className="invisible size-6 font-bold text-white group-data-[selected]:visible" />
              </div>
            </ListboxOption>
          ))}
          <button
            type="button"
            className="mt-4 h-11 w-full rounded-lg bg-contrast font-bold text-main"
          >
            Agregar Categoría
          </button>
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}

export default TasksHome;
