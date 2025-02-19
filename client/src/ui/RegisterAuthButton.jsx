import { Link } from "react-router-dom";

function RegisterAuthButton() {
  return (
    <Link
      to="/register"
      className="bg-azul-principal flex h-12 w-40 items-center justify-center rounded-md px-4 tracking-wider text-[#ffffff]"
    >
      Empezar
    </Link>
  );
}

export default RegisterAuthButton;
