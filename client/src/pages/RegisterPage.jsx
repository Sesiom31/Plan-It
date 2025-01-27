import FormAuth from "../components/auth/FormAuth";
import HeadAuth from "../components/auth/HeadAuth";
import ReturnIcon from "../ui/ReturnIcon";
import fondo from "../assets/fondo-todo.webp";
import { inputsRegister } from "../data/inputsRegister";
import { registerSchema } from "../schemas/userAuth.schema";
import { useRegisterUserMutation } from "../services/api";

function RegisterPage() {
  const [onRegister, { isLoading }] = useRegisterUserMutation();

  return (
    <section className="h-dvh w-full bg-white lg:flex">
      <div
        className="hidden h-full w-[50%] lg:block lg:bg-cover lg:bg-center lg:bg-no-repeat"
        style={{ backgroundImage: `url(${fondo})` }}
      ></div>

      <div className="relative mx-auto h-full p-4 lg:w-[50%]">
        <div className="absolute left-4 top-4 sm:left-8 sm:top-6">
          <ReturnIcon to="/" />
        </div>

        <div className="mx-auto mt-10 w-full">
          <HeadAuth
            title="Crea tu cuenta en PlanIt"
            subtitle="Ingresa tus datos para registrarte"
          />

          <FormAuth
            inputs={inputsRegister}
            nameButton="Registrarse"
            optionLink="Inicia sesión"
            subtitle="¿Ya tienes una cuenta?"
            toLink="/login"
            schema={registerSchema}
            fetchAuth={onRegister}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
