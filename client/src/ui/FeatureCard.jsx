import PropTypes from "prop-types";

function FeatureCard({ feature }) {
  return (
    <div className="flex h-auto min-h-48 flex-col items-center rounded-md border border-[#F57C00] p-4 py-6">
      <figure className={`${feature.color}`}>
        <feature.icon className="aspect-square h-12 w-12 text-2xl font-black" />
      </figure>

      <div className="flex h-20 items-center text-center">
        <dt className="text-[1.4rem] font-normal text-gray-800">
          {feature.title}
        </dt>
      </div>
      <div className="flex h-20 items-center text-center">
        <dd className="text-gray-500">{feature.description}</dd>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default FeatureCard;
