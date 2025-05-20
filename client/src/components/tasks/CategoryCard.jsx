import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CategoryCard({ category }) {
  return (
    <div className="h-auto w-full">
      <Link className="flex h-24 w-full flex-col justify-start gap-2 rounded-lg bg-dividers px-2 py-4 text-white ring-1 ring-contrast">
        <div className="flex w-full items-center justify-start gap-2">
          <div className="size-4 rounded-full bg-red-500"></div>
          <h3 className="text-xl font-bold">{category.name}</h3>
        </div>
      </Link>
    </div>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    bg: PropTypes.string,
  }).isRequired,
};

export default CategoryCard;
