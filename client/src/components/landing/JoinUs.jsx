import InvitedAuth from "../auth/InvitedAuth";
import RegisterAuthButton from "../../ui/RegisterAuthButton";

function JoinUs() {
  return (
    <section className="sm-pt-16 h-auto bg-dividers pb-8 pt-12">
      <div className="h-auto min-h-[18rem] w-full">
        <div className="h-auto px-4">
          <div className="flex h-24 items-center justify-center">
            <h2 className="h-full p-1 text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
              ¿Listo para tomar el control de tu tiempo?
            </h2>
          </div>

          <div className="h-auto">
            <p className="p-1 text-center text-gray-400">
              Únete a la comunidad de PlanIt y descubre una forma más efectiva
              de gestionar tus tareas y alcanzar tus metas.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 flex h-auto flex-col items-center gap-8 py-2 sm:flex-row sm:justify-center sm:gap-12 md:gap-20">
          <div className="h-12 w-60">
            <RegisterAuthButton />
          </div>
          <div className="h-12 w-60">
            <InvitedAuth optionalClass="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
