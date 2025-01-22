import PropTypes from "prop-types";

function ProcessCard({ step }) {
  return (
    <div className="flex h-auto min-h-56 flex-col items-center rounded-md border border-[#F57C00] p-4">
      <div className="mt-6 h-12">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F57C00] text-2xl font-bold text-white md:h-12 md:w-12">
          {step.numberStep}
        </div>
      </div>

      <div className="flex h-14 items-center text-center">
        <dt className="text-[1.45rem] font-normal text-gray-800">
          {step.title}
        </dt>
      </div>
      <div className="flex h-20 items-center text-center">
        <dd className="text-gray-500">{step.description}</dd>
      </div>
    </div>
  );
}

ProcessCard.propTypes = {
  step: PropTypes.object.isRequired,
};

export default ProcessCard;
