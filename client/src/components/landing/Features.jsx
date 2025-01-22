import FeatureCard from "../../ui/FeatureCard";
import { featuresPlanIt as features } from "../../data/featuresPlanIt";

function Features() {
  const content = features.map((feature) => (
    <FeatureCard key={feature.title} feature={feature} />
  ));
  return (
    <section className="h-auto p-4">
      <div className="min-h-[40rem]">
        <div className="mt-8 md:mt-12 lg:mt-8">
          <h2 className="text-center text-3xl font-medium text-gray-800 md:text-4xl">
            Características principales
          </h2>
        </div>

        <dl className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(18rem,24rem))] justify-center gap-6 px-6 md:mt-12 md:gap-10">
          {content}
        </dl>
      </div>
    </section>
  );
}

export default Features;
