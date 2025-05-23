import { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
import PropTypes from "prop-types";

function CategoriesList({ categories }) {
  const [idSelected, setIdSelected] = useState(null);

  useEffect(() => {
    setIdSelected(categories[0]?._id);
  }, [categories]);

  return (
    <ul className="flex max-h-[calc(100%-8rem)] flex-col gap-5 overflow-y-auto px-4 py-6 text-main">
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          category={category}
          idSelected={idSelected}
          setIdSelected={setIdSelected}
        />
      ))}
    </ul>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      cantidad: PropTypes.number.isRequired,
      isDefault: PropTypes.bool.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CategoriesList;
