import PropTypes from "prop-types";

function HeadAuth({ title, subtitle }) {
  return (
    <div className="text-gris-oscuro mt-10 text-center">
      <h1 className="text-2xl font-normal tracking-wider md:text-3xl md:font-bold lg:text-4xl lg:tracking-normal">
        {title} <span className="text-azul-principal font-bold">PlanIt</span>
      </h1>
      <p className="text-gris-text mt-1.5">{subtitle}</p>
    </div>
  );
}

HeadAuth.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeadAuth;
