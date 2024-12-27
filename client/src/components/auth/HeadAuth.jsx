import PropTypes from "prop-types";

function HeadAuth({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-500">{subtitle}</p>
    </div>
  );
}

HeadAuth.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeadAuth;
