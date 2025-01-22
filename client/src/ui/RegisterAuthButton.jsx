import { Link } from "react-router-dom";

function RegisterAuthButton() {
  return (
    <Link
      to="/register"
      className="flex h-12 w-40 items-center justify-center rounded-md bg-[#F57C00] px-4 tracking-wider text-[#F5F9FF]"
    >
      Empezar
    </Link>
  );
}

export default RegisterAuthButton;
