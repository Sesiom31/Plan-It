import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ReturnIcon({ to }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center">
      <Link to={to}>
        <ArrowLeftIcon className="text-gris-medio h-7 w-7 font-bold" />
      </Link>
    </div>
  );
}

ReturnIcon.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ReturnIcon;
