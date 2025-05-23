import { ListboxOption } from "@headlessui/react";
import PropTypes from "prop-types";
import { RxCheck } from "react-icons/rx";
import { capitalizeWord } from "../../helpers/capitalizeWord";
import clsx from "clsx";

function CategoryOption({ category, lengthCantidad }) {
  return (
    <ListboxOption
      value={category}
      className={clsx(
        "group flex h-11 items-center justify-between rounded-lg px-4 py-1.5 text-white",
        "data-[focus]:bg-dividers data-[selected]:bg-dividers",
      )}
    >
      <h3 className="w-1/2 text-left">{capitalizeWord(category.name)}</h3>
      <div className="flex w-1/2 items-center justify-between">
        <span className="pl-6 text-left text-sm text-gray-400">
          {category.cantidad.toString().padStart(lengthCantidad, "0")}
          {` tarea${category.cantidad !== 1 ? "s" : ""}`}
        </span>
        <RxCheck className="invisible size-6 font-bold text-white group-data-[selected]:visible" />
      </div>
    </ListboxOption>
  );
}

CategoryOption.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
  }).isRequired,
  lengthCantidad: PropTypes.number.isRequired,
};

export default CategoryOption;
