import ProcessCard from "../../ui/ProcessCard";
import { steps } from "../../data/stepsProcess";

function Process() {
  const content = steps.map((step) => (
    <ProcessCard step={step} key={step.title} />
  ));
  return (
    <section className="text-gris-oscuro h-auto p-4">
      <div className="min-h-[40rem] lg:min-h-[28rem]">
        <div className="mt-8 sm:mt-4 md:mt-12 lg:mt-20">
          <h2 className="text-center text-3xl font-medium md:text-4xl">
            ¿Cómo funciona?
          </h2>
        </div>

        <dl className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(18rem,24rem))] justify-center gap-6 px-6 md:mt-12 md:gap-10">
          {content}
        </dl>
      </div>
    </section>
  );
}

export default Process;
