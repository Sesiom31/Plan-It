import FormAuth from "../components/auth/FormAuth";
import HeadAuth from "../components/auth/HeadAuth";
import InvitedAuth from "../components/auth/InvitedAuth";
import ReturnIcon from "../ui/auth/ReturnIcon";
import fondo from "../assets/fondo-todo.webp";
import { inputsLogin } from "../data/inputsLogin";
import { loginSchema } from "../schemas/userAuth.schema";
import { useLoginUserMutation } from "../services/api";

function LoginPage() {
  const [onLogin, { isLoading }] = useLoginUserMutation();

  return (
    <section className="h-auto w-full text-white">
      <div className="h-auto min-h-dvh w-full lg:flex">
        <div className="hidden h-auto w-[40%] lg:relative lg:block">
          <div
            className="lg:fixed lg:inset-0 lg:right-[60%] lg:bg-cover lg:bg-center lg:bg-no-repeat"
            style={{ backgroundImage: `url(${fondo})` }}
          ></div>
          <div className="bg-gradient-to-tl from-sunsetBold/20 to-main/65 lg:absolute lg:inset-0"></div>
        </div>

        <div className="relative h-auto w-full lg:w-[60%]">
          <div className="absolute left-4 top-6 text-gray-300 sm:left-6 md:left-8 md:top-8">
            <ReturnIcon to="/home" />
          </div>

          <div className="h-auto w-full pb-8 pt-[5.2rem] md:pt-10">
            <HeadAuth
              title="Bienvenido de nuevo"
              subtitle="Ingresa para seguir donde lo dejaste."
            />

            <div className="mt-12 h-14 w-full px-5 lg:h-[3.25rem]">
              <InvitedAuth optionalClass="rounded-xl max-w-[28rem] mx-auto" />
            </div>

            <div className="mx-auto my-8 flex h-8 max-w-[32rem] items-center gap-4 px-4 text-gray-300">
              <div className="h-px flex-1 bg-gray-400" />
              <span className="flex -translate-y-0.5 items-center">o</span>
              <div className="h-px flex-1 bg-gray-400" />
            </div>

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
      </div>
    </section>
  );
}

export default LoginPage;
