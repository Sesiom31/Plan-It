import RegisterAuthButton from "../../ui/RegisterAuthButton";

function JoinUs() {
  return (
    <section className="text-gris-oscuro p-4">
      <div className="min-h-60 pb-8">
        <div className="mt-10 sm:mt-4 md:mt-12 lg:mt-20">
          <div className="">
            <h2 className="text-center text-3xl font-medium md:text-4xl">
              ¿Listo para tomar el control de tu tiempo?
            </h2>
          </div>
          <div className="mt-6 md:mt-2">
            <p className="text-gris-text text-center">
              Únete a la comunidad de PlanIt y descubre una forma más efectiva
              de gestionar tus tareas y alcanzar tus metas.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 flex justify-center md:mt-14">
          <RegisterAuthButton />
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
