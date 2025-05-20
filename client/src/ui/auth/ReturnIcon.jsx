import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ReturnIcon({ to }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center">
      <Link
        to={to}
        className="border-none outline-none transition-transform duration-200 ease-in-out hover:-translate-x-0.5"
      >
        <ArrowLeftIcon className="h-7 w-7 border-none font-bold outline-none lg:h-6 lg:w-6" />
      </Link>
    </div>
  );
}

ReturnIcon.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ReturnIcon;
