import { PiCheckBold } from "react-icons/pi";
import PropTypes from "prop-types";

function CategoryTask({ category }) {
  return (
    <li className="w-full">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-3 py-0.5"
      >
        <div className="flex items-center justify-start gap-2">
          <PiCheckBold />

          <span>{category.name}</span>
        </div>

        <div>
          <category.icon />
        </div>
      </button>
    </li>
  );
}

CategoryTask.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryTask;
