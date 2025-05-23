import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOptions,
} from "@headlessui/react";
import { Link, useSearchParams } from "react-router-dom";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

import CategoryOption from "../../ui/tasks/CategoryOption";
import PropTypes from "prop-types";
import { capitalizeWord } from "../../helpers/CapitalizeWord";
import clsx from "clsx";

function CategoriesOptions({ categories }) {
  console.log("CategoriesOptions");
  const [searchParam, setSearchParam] = useSearchParams();
  const paramCategory = searchParam.get("category");

  const lengthCantidad = Math.max(
    ...categories.map((category) => category.cantidad),
  ).toString().length;

  console.log(lengthCantidad);

  const selected =
    categories?.find((category) => category.name === paramCategory) ||
    categories[0];

  const handleChange = (value) => {
    setSearchParam({ category: value.name });
  };

  return (
    <Field className="absolute left-0 right-0 top-0 h-28 w-full px-4 py-2">
      <Label className="text-gray-400">Categorías: </Label>
      <Listbox value={selected} onChange={handleChange}>
        <ListboxButton
          className={clsx(
            "relative mt-2 flex h-11 w-full items-center justify-between rounded-lg bg-oscuro px-4 text-white",
            "data-[open]:outline:none group border-none outline-none",
          )}
        >
          <h3 className="w-1/2 text-left">{capitalizeWord(selected.name)}</h3>
          <div className="flex w-1/2 items-center justify-between gap-8 pl-4">
            <span className="text-left text-gray-400">
              {selected.cantidad.toString().padStart(lengthCantidad, "0")}
              {` tarea${selected.cantidad !== 1 ? "s" : ""}`}
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
          {categories?.map((category) => (
            <CategoryOption
              key={category.name}
              category={category}
              lengthCantidad={lengthCantidad}
            />
          ))}
          <Link
            to={"/tasks/categories"}
            className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-contrast font-bold text-main"
          >
            Gestionar categorías
          </Link>
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}

CategoriesOptions.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      cantidad: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CategoriesOptions;
