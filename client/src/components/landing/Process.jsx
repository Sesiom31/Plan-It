import { steps } from "../../data/stepsProcess";

function Process() {
  const content = steps.map((step) => (
    <section
      key={step.numberStep}
      className="flex h-auto w-full flex-col items-center rounded-xl border border-gray-400 px-2 py-6"
    >
      <div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-2xl font-bold text-white">
          {step.numberStep}
        </div>
      </div>

      <div className="text-center">
        <div className="mt-2">
          <h3 className="text-[1.45rem] font-bold text-gray-800">
            {step.title}
          </h3>
        </div>
        <div className="mt-2">
          <p className="text-gray-500">{step.description}</p>
        </div>
      </div>
    </section>
  ));
  return (
    <div className="my-8 border-b border-gray-400 bg-gray-100 px-4 py-8 tracking-wide">
      <section>
        <div className="mb-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            ¿Cómo funciona?
          </h2>
        </div>

        <ul className="flex flex-col items-center gap-8">{content}</ul>
      </section>
    </div>
  );
}

export default Process;
