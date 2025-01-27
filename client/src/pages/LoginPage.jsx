import FormAuth from "../components/auth/FormAuth";
import HeadAuth from "../components/auth/HeadAuth";
import ReturnIcon from "../ui/ReturnIcon";
import fondo from "../assets/fondo-todo.webp";
import { inputsLogin } from "../data/inputsLogin";
import { loginSchema } from "../schemas/userAuth.schema";
import { useLoginUserMutation } from "../services/api";

function LoginPage() {
  const [onLogin, { isLoading }] = useLoginUserMutation();

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
            title="Bienvenido de vuelta a PlanIt"
            subtitle="Ingresa tus credenciales para acceder"
          />

          <FormAuth
            inputs={inputsLogin}
            nameButton="Iniciar sesión"
            optionLink="Regístrate"
            subtitle="¿No tienes una cuenta?"
            toLink="/register"
            schema={loginSchema}
            fetchAuth={onLogin}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
