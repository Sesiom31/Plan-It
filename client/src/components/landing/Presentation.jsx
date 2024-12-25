import RegisterAuthButton from "../../ui/RegisterAuthButton";

function Presentation() {
  return (
    <div className="mt-4 h-auto w-full p-4">
      <section className="rounded-lg bg-gradient-to-b from-blue-100 to-green-200 p-2">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto">
            <h1 className="text-center text-3xl font-extrabold tracking-wide text-gray-900">
              Planifica con el clima de tu lado
            </h1>
          </div>
          <div className="mt-6">
            <h2 className="text-center text-gray-500">
              PlanIt te ayuda a gestionar tus tareas, proyectos y planes
              teniendo en cuenta las condiciones climáticas. Optimiza tu tiempo
              y aumenta tu productividad
            </h2>
          </div>
        </div>
        <div className="mx-auto my-6 flex justify-center">
          <RegisterAuthButton />
        </div>
      </section>
    </div>
  );
}

export default Presentation;
