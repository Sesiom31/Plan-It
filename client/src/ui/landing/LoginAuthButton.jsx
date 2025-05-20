import { Link } from "react-router-dom";

function LoginAuthButton() {
  return (
    <Link
      to="/login"
      className="bg-sunsetSoft flex h-7 w-28 items-center justify-center rounded-md text-sm font-bold text-secondary md:w-32"
    >
      Iniciar sesión
    </Link>
  );
}

export default LoginAuthButton;
