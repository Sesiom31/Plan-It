import FeatureCard from "../../ui/landing/FeatureCard";
import { featuresPlanIt as features } from "../../data/featuresPlanIt";

function Features() {
  const content = features.map((feature) => (
    <FeatureCard key={feature.title} feature={feature} />
  ));

  return (
    <section className="h-auto pb-8 pt-12 sm:pt-16">
      <div className="h-auto min-h-[32rem] w-full">
        <h2 className="py-4 text-center text-3xl sm:text-4xl lg:text-[2.8rem]">
          Características
        </h2>
        <dl className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-12 px-8 py-8 sm:px-16 lg:py-16">
          {content}
        </dl>
      </div>
    </section>
  );
}

export default Features;
