import { Link } from "react-router-dom";

function RegisterAuthButton() {
  return (
    <Link
      to="/register"
      className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-bl from-[#5433fd] to-[#35d6dd] px-4 font-bold text-main"
    >
      Empezar con una cuenta
    </Link>
  );
}

export default RegisterAuthButton;
