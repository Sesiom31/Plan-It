import { featuresPlanIt as features } from "../../data/featuresPlanIt";

function Features() {
  const content = features.map((feature) => (
    <section className="mt-10 flex flex-col items-center" key={feature.title}>
      <figure className={`${feature.color}`}>
        <feature.icon className="aspect-square h-12 w-12 text-2xl font-black" />
      </figure>

      <div className="text-center">
        <div className="mt-2">
          <h3 className="text-[1.45rem] font-bold text-gray-800">
            {feature.title}
          </h3>
        </div>
        <div className="mb-6 mt-2">
          <p className="text-gray-500">{feature.description}</p>
        </div>
      </div>
    </section>
  ));
  return (
    <div className="mt-8 px-4 pt-8 tracking-wide">
      <section>
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Características principales
          </h2>
        </div>

        <ul>{content}</ul>
      </section>
    </div>
  );
}

export default Features;
