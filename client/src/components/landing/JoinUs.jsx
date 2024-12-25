import RegisterAuthButton from "../../ui/RegisterAuthButton";

function JoinUs() {
  return (
    <div className="mt-4 h-auto w-full border-b border-gray-400 p-4">
      <section>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              ¿Listo para planificar con inteligencia?
            </h2>
          </div>
          <div className="mt-6">
            <p className="text-center text-gray-500">
              Únete a PlanIt hoy y comienza a optimizar tu tiempo y
              productividad con la ayuda del clima
            </p>
          </div>
        </div>
        <div className="mx-auto my-6 flex justify-center">
          <RegisterAuthButton />
        </div>
      </section>
    </div>
  );
}

export default JoinUs;
