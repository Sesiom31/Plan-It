import PropTypes from "prop-types";

function FeatureCard({ feature }) {
  return (
    <div className="flex h-[19rem] w-full max-w-[30rem] flex-col items-center justify-self-center rounded-md bg-oscuro px-6 py-6 ring ring-secondary">
      <div className={`${feature.color} flex h-16 items-center justify-center`}>
        <feature.icon className="aspect-square h-12 w-12 text-2xl font-bold" />
      </div>

      <div className="flex h-20 items-center p-1 text-center">
        <dt className="text-[1.4rem] font-normal">{feature.title}</dt>
      </div>
      <div className="flex h-24 items-center p-1 text-center text-[0.9rem] text-gray-400 sm:text-[0.95rem]">
        <dd className="w-full">{feature.description}</dd>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default FeatureCard;
