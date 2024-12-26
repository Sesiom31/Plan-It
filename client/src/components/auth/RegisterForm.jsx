import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import FieldForm from "../../ui/FieldForm";
import { Link } from "react-router-dom";

const inputs = [
  {
    label: "Nombre",
    name: "username",
    type: "text",
    placeholder: "Allan Poe",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "abc@email.com",
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    placeholder: "***********",
  },
  {
    label: "Confirmar contraseña",
    name: "confirmPassword",
    type: "password",
    placeholder: "***********",
  },
];

function RegisterForm() {
  const content = inputs.map((input) => (
    <FieldForm key={input.name} input={input} />
  ));

  return (
    <section className="h-full w-full">
      <div className="flex h-full w-full flex-col gap-12 px-4 py-8">
        <div className="mt-6 flex justify-start">
          <Link to="/">
            <ArrowLeftIcon className="h-8 w-8 font-bold text-gray-900" />
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Crea tu cuenta en PlanIt
          </h1>
          <p className="mt-2 text-gray-500">
            Ingresa tus datos para registrarte
          </p>
        </div>

        <form>
          <div className="my-4 flex h-auto flex-col gap-3">
            {content}
            <span className="h-6 w-full text-center text-sm font-bold text-red-500"></span>
          </div>

          <div>
            <div>
              <button className="mt-4 h-12 w-full rounded-md bg-emerald-500 font-bold text-white hover:bg-emerald-600">
                {" "}
                Registrarse{" "}
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-500">
                ¿Ya tienes una cuenta?{" "}
                <Link className="font-bold text-gray-800 underline" to="/login">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
