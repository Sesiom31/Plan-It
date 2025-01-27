import PropTypes from "prop-types";

function HeadAuth({ title, subtitle }) {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-normal tracking-wider text-gray-800 md:text-3xl md:font-bold lg:text-4xl lg:tracking-normal">
        {title}
      </h1>
      <p className="mt-1.5 text-gray-500">{subtitle}</p>
    </div>
  );
}

HeadAuth.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeadAuth;
