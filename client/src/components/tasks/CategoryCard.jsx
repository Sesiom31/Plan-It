import PropTypes from "prop-types";
import { backgroundColorIsLight } from "../../helpers/backgroundColorIsLight";
import { capitalizeWord } from "../../helpers/CapitalizeWord";

function CategoryCard({ category, idSelected, setIdSelected }) {
  const isSelected = category._id === idSelected;
  const isLight = backgroundColorIsLight(category.color);

  const onSelected = () => {
    setIdSelected(category._id);
  };

  return (
    <li
      key={category._id}
      onClick={onSelected}
      className={`w-full origin-center rounded-lg px-4 py-2 transition-all duration-200 ease-out ${isSelected ? "min-h-52" : "min-h-28"}`}
      style={{ backgroundColor: category.color }}
    >
      <h3
        className="text-lg font-bold"
        style={{ color: isLight ? "#122830" : "#ffffff" }}
      >
        {capitalizeWord(category.name)}
      </h3>
    </li>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
    isDefault: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  idSelected: PropTypes.string,
  setIdSelected: PropTypes.func.isRequired,
};

export default CategoryCard;
