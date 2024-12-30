import FormAuth from "../components/auth/FormAuth";
import HeadAuth from "../components/auth/HeadAuth";
import ReturnIcon from "../ui/ReturnIcon";
import { inputsRegister } from "../data/inputsRegister";
import { registerSchema } from "../schemas/userAuth.schema";
import { useRegisterUserMutation } from "../services/api";

function RegisterPage() {
  const [onRegister, { isLoading }] = useRegisterUserMutation();

  return (
    <section className="h-screen max-h-screen w-full">
      <div className="flex h-auto w-full flex-col gap-8 px-4 py-8">
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
          schema={registerSchema}
          fetchAuth={onRegister}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}

export default RegisterPage;
