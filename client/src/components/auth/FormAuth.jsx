import FieldForm from "../../ui/FieldForm";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FormAuth({ inputs, nameButton, subtitle, optionLink, toLink }) {
  const content = inputs.map((input) => (
    <FieldForm key={input.name} input={input} />
  ));

  return (
    <form>
      <div className="my-4 flex h-auto flex-col gap-3">
        {content}
        <span className="h-6 w-full text-center text-sm font-bold text-red-500"></span>
      </div>

      <div>
        <div>
          <button className="mt-4 h-12 w-full rounded-md bg-emerald-500 font-bold text-white hover:bg-emerald-600">
            {" "}
            {nameButton}{" "}
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-500">
            {subtitle}{" "}
            <Link className="font-bold text-gray-800 underline" to={toLink}>
              {optionLink}
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

FormAuth.propTypes = {
  inputs: PropTypes.array.isRequired,
  nameButton: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  optionLink: PropTypes.string.isRequired,
  toLink: PropTypes.string.isRequired,
};

export default FormAuth;
