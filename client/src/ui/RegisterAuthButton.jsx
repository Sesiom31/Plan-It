import { Link } from "react-router-dom";

function RegisterAuthButton() {
  return (
    <Link
      to="/register"
      className="rounded-lg bg-gray-900 px-4 py-1.5 text-base font-bold text-white outline-none hover:bg-gray-900"
    >
      Comenzar gratis
    </Link>
  );
}

export default RegisterAuthButton;
