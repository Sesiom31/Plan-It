import { Link } from "react-router-dom";

function LoginAuthButton() {
  return (
    <Link
      to="/login"
      className="rounded-lg bg-emerald-500 px-4 py-1.5 text-base font-bold text-white outline-none hover:bg-emerald-600"
    >
      Iniciar sesión
    </Link>
  );
}

export default LoginAuthButton;
