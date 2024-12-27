import FormAuth from "../components/auth/FormAuth";
import HeadAuth from "../components/auth/HeadAuth";
import ReturnIcon from "../ui/ReturnIcon";
import { inputsRegister } from "../data/inputsRegister";

function RegisterPage() {
  return (
    <section className="h-full max-h-screen w-full">
      <div className="flex h-full w-full flex-col gap-10 px-4 py-8">
        <ReturnIcon to="/" />

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
        />
      </div>
    </section>
  );
}

export default RegisterPage;
