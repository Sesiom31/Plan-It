import PropTypes from "prop-types";

function ProcessCard({ step }) {
  return (
    <div className="flex h-[16rem] w-full max-w-[30rem] flex-col items-center justify-self-center rounded-md bg-oscuro px-6 py-8 ring ring-secondary">
      <div className="flex h-16 items-center justify-center p-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl font-bold text-main">
          {step.numberStep}
        </div>
      </div>

      <div className="flex h-12 items-center p-1 text-center">
        <dt className="text-[1.45rem] font-normal">{step.title}</dt>
      </div>
      <div className="flex h-20 items-center text-center text-gray-400">
        <dd className="text-gris-text">{step.description}</dd>
      </div>
    </div>
  );
}

ProcessCard.propTypes = {
  step: PropTypes.object.isRequired,
};

export default ProcessCard;
