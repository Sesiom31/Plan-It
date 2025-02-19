import PropTypes from "prop-types";

function FeatureCard({ feature }) {
  return (
    <div className="border-acento-naranja flex h-auto min-h-48 flex-col items-center rounded-md border p-4 py-6">
      <div className={`${feature.color}`}>
        <feature.icon className="aspect-square h-12 w-12 text-2xl font-black" />
      </div>

      <div className="flex h-20 items-center text-center">
        <dt className="text-[1.4rem] font-normal">{feature.title}</dt>
      </div>
      <div className="flex h-20 items-center text-center">
        <dd className="text-gris-text">{feature.description}</dd>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default FeatureCard;
