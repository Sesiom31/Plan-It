import FormAuth from "../components/auth/FormAuth";
import HeadAuth from "../components/auth/HeadAuth";
import ReturnIcon from "../ui/ReturnIcon";
import { inputsLogin } from "../data/inputsLogin";

function LoginPage() {
  return (
    <section className="h-full max-h-screen w-full">
      <div className="flex h-full w-full flex-col gap-10 px-4 py-8">
        <ReturnIcon to="/" />

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
        />
      </div>
    </section>
  );
}

export default LoginPage;
