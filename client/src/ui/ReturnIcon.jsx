import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ReturnIcon({ to }) {
  return (
    <div className="mt-2 flex justify-start">
      <Link to={to}>
        <ArrowLeftIcon className="h-8 w-8 font-bold text-gray-900" />
      </Link>
    </div>
  );
}

ReturnIcon.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ReturnIcon;
