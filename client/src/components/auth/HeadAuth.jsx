import PropTypes from "prop-types";

function HeadAuth({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="py-2 text-3xl font-bold sm:text-[2.2rem] md:text-4xl">
        {title}
      </h1>
      <p className="mt-1.5 py-1 text-gray-400 md:mt-0.5">{subtitle}</p>
    </div>
  );
}

HeadAuth.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeadAuth;
